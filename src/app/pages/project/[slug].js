import { useRouter } from 'next/router'
import React from 'react'
import db from '../../src/api/db.json';

const Page = () => {
    const router = useRouter();

    const {slug} = router.query;
    console.log(db);
    
  return (
    <main>
        <p>salut</p>
        <p>Slug : {slug}</p>
    </main>
  )
}

export default Page;
