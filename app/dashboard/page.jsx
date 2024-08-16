'use client';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import Loading from '../loading'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const Dashboard = () => {
    const { data: session, status } = useSession();
    const [activeTab, setActiveTab] = useState('profile');

    if (status === 'loading') {
        return <Loading />
    }

    if (!session) {
        redirect("/");
    }

    const tabVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
    };

    return (
        <div>
            <main className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                <p className="mb-6">Welcome, {session.user.name}!</p>

                <div className="mb-6">
                    <nav className="flex border-b">
                        <button
                            className={`py-2 px-4 text-lg font-semibold ${activeTab === 'profile' ? 'border-b-2 border-neela text-neela' : 'text-gehra'}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            Profile
                        </button>
                        <button
                            className={`py-2 px-4 text-lg font-semibold ${activeTab === 'activity' ? 'border-b-2 border-neela text-neela' : 'text-gehra'}`}
                            onClick={() => setActiveTab('activity')}
                        >
                            Recent Activity
                        </button>
                    </nav>
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === 'profile' && (
                        <motion.div
                            key="profile"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={tabVariants}
                            className="p-4 border rounded-lg shadow-md bg-light"
                        >
                            <h2 className="text-xl font-semibold mb-4">Profile</h2>
                            <div className="flex items-center mb-4">
                                <Image src={session.user.image} alt="Profile" height={120} width={80} className="h-16 w-16 rounded-full mr-4" />
                                <div>
                                    <p className="text-lg font-semibold">{session.user.name}</p>
                                    <p className="text-gehra">{session.user.email}</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'activity' && (
                        <motion.div
                            key="activity"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={tabVariants}
                            className="p-4 border rounded-lg shadow-md bg-white"
                        >
                            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                            <ul className="list-disc pl-5">
                                <li>Activity 1</li>
                                <li>Activity 2</li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
};

export default Dashboard;
