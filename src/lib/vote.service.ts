import { db } from '@/lib/firebase';

import { doc, setDoc, collection, Timestamp } from 'firebase/firestore';

export async function registerVote(
    name: string,
    vote: string,
): Promise<string> {
    try {
        const tsRef = doc(collection(db, 'tech_stack_votes'));

        const newTsVote = {
            id: tsRef.id,
            name,
            vote,
            createdAt: Timestamp.now(),
        };

        await setDoc(tsRef, newTsVote);

        return tsRef.id;
    } catch (error: unknown) {
        console.error(
            'Error saving vote:',
            error instanceof Error ? error.message : error,
        );
        throw error;
    }
}
