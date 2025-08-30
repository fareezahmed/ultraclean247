'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Icon } from '@/components/ui/icon'
import { Download, Bell, Wifi, WifiOff, Smartphone } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

export function PWARegistration() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>('default')

  useEffect(() => {
    // Check if PWA is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowInstallPrompt(true)
    }

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
      console.log('PWA was installed')
    }

    // Check online status
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    // Check notification permission
    if ('Notification' in window) {
      setNotificationPermission(Notification.permission)
    }

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration)
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error)
        })
    }

    // Add event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Set initial online status
    setIsOnline(navigator.onLine)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt')
    } else {
      console.log('User dismissed the install prompt')
    }

    setDeferredPrompt(null)
    setShowInstallPrompt(false)
  }

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      alert('This browser does not support notifications')
      return
    }

    try {
      const permission = await Notification.requestPermission()
      setNotificationPermission(permission)

      if (permission === 'granted') {
        // Subscribe to push notifications
        await subscribeToPushNotifications()
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error)
    }
  }

  const subscribeToPushNotifications = async () => {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      console.log('Push notifications not supported')
      return
    }

    try {
      const registration = await navigator.serviceWorker.ready
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
      })

      console.log('Push notification subscription:', subscription)
      
      // Send subscription to server
      // await fetch('/api/push-subscription', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(subscription)
      // })
    } catch (error) {
      console.error('Error subscribing to push notifications:', error)
    }
  }

  const sendTestNotification = async () => {
    if (notificationPermission !== 'granted') {
      await requestNotificationPermission()
      return
    }

    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.ready
      await registration.showNotification('FamsComTech Laundry Services', {
        body: 'Thank you for installing our app! We\'ll keep you updated with the latest offers.',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        data: {
          url: '/'
        }
      })
    }
  }

  if (isInstalled) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Icon icon={Smartphone} className="w-5 h-5" />
            App Installed Successfully!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-700 mb-3">
            FamsComTech is now installed on your device. You can access it like a native app!
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Icon icon={Wifi} className="w-3 h-3 mr-1" />
              Online
            </Badge>
            {notificationPermission === 'granted' && (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Icon icon={Bell} className="w-3 h-3 mr-1" />
                Notifications Enabled
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {/* Install Prompt */}
      {showInstallPrompt && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Icon icon={Download} className="w-5 h-5" />
              Install FamsComTech App
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700 mb-3">
              Install our app for a better experience with offline access and push notifications.
            </p>
            <Button onClick={handleInstallClick} className="bg-blue-600 hover:bg-blue-700">
              <Icon icon={Download} className="w-4 h-4 mr-2" />
              Install App
            </Button>
          </CardContent>
        </Card>
      )}

      {/* PWA Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon icon={Smartphone} className="w-5 h-5" />
            Progressive Web App Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Connection Status */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Icon 
                icon={isOnline ? Wifi : WifiOff} 
                className={`w-4 h-4 ${isOnline ? 'text-green-600' : 'text-red-600'}`} 
              />
              <span className="font-medium">Connection Status</span>
            </div>
            <Badge variant={isOnline ? "default" : "destructive"}>
              {isOnline ? 'Online' : 'Offline'}
            </Badge>
          </div>

          {/* Notification Permission */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Icon icon={Bell} className="w-4 h-4 text-blue-600" />
              <span className="font-medium">Push Notifications</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge 
                variant={
                  notificationPermission === 'granted' 
                    ? 'default' 
                    : notificationPermission === 'denied' 
                    ? 'destructive' 
                    : 'secondary'
                }
              >
                {notificationPermission === 'granted' 
                  ? 'Enabled' 
                  : notificationPermission === 'denied' 
                  ? 'Blocked' 
                  : 'Not Set'
                }
              </Badge>
              {notificationPermission !== 'granted' && (
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={requestNotificationPermission}
                >
                  Enable
                </Button>
              )}
            </div>
          </div>

          {/* Test Notification */}
          {notificationPermission === 'granted' && (
            <Button 
              variant="outline" 
              onClick={sendTestNotification}
              className="w-full"
            >
              <Icon icon={Bell} className="w-4 h-4 mr-2" />
              Send Test Notification
            </Button>
          )}

          {/* PWA Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-1">Offline Access</h4>
              <p className="text-sm text-green-700">
                Access key features even without internet connection
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-1">App-like Experience</h4>
              <p className="text-sm text-blue-700">
                Install and use like a native mobile app
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-1">Fast Loading</h4>
              <p className="text-sm text-purple-700">
                Cached content loads instantly
              </p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-1">Push Notifications</h4>
              <p className="text-sm text-orange-700">
                Get updates about your orders and offers
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

