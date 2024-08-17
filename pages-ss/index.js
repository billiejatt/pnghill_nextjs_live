'use client'
import React from 'react';
import PageComponent from '../app/page';
import { getItems } from '../lib/api';

export async function getStaticProps() {
    const fetchedItems = await getItems();
    const allPosts = fetchedItems?.edges || [];

    return {
        props: {
            allPosts
        },
        revalidate: 10, // Optionally use revalidate for Incremental Static Regeneration
    };
}

export default function HomePage({ allPosts }) {
    return <PageComponent allPosts={allPosts} />;
}
