import { db } from '@/lib/firebase';

import { doc, setDoc, collection, Timestamp } from 'firebase/firestore';

export async function addEmailFollowUp(email: string): Promise<string> {
    try {
        const emailRef = doc(collection(db, 'emails_follow_up'));

        const newEmail = {
            id: emailRef.id,
            email,
            createdAt: Timestamp.now(),
        };

        await setDoc(emailRef, newEmail);

        return emailRef.id;
    } catch (error: unknown) {
        console.error(
            'Error saving email:',
            error instanceof Error ? error.message : error,
        );
        throw error;
    }
}
