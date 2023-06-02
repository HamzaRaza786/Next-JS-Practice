"use client";
import {SessionProvider} from 'next-auth/react';
const Provider = ({children, session}:any) => {
  return (
    <div>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </div>
  )
}

export default Provider
