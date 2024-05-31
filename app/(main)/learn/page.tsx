import { FeedWrapper } from '@/components/feed-wrapper';
import { StickyWrapper } from '@/components/sticky-wrapper';
import React from 'react';
import { Header } from './header';
import { UserProgress } from '@/components/user-progress';

interface LearningProps {

}

const Learning = ({ }: LearningProps) => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={
                        {
                            title: "Spanish",
                            imageSrc: "/svg/es.svg"
                        }
                    }
                    hearts={10}
                    points={200}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                {/* Content */}
                <Header title="Spanish"/>
            </FeedWrapper>
        </div>
    )
}

export default Learning;