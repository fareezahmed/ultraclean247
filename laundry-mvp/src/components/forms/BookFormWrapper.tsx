"use client";

import { useSearchParams } from 'next/navigation';
import BookForm from "./BookForm";
import FirstTimeBookForm from "./FirstTimeBookForm";

export default function BookFormWrapper() {
  const searchParams = useSearchParams();
  const isFirstTime = searchParams.get('first-time') === 'true';
  
  return isFirstTime ? <FirstTimeBookForm /> : <BookForm />;
}
