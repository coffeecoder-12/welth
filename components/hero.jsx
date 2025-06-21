"use client";
import Link from 'next/link'
import { Button } from './ui/button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <div>
        <h1>
            Manage Your Finances <br/> with AI.
        </h1>
        <p>
            {" "}
            An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.
        </p>
        <div>
            <Link href="/dashboard">
                <Button size="lg" className="px-8">Get Started</Button>
            </Link>
            <Link href="https://www.youtube.com">
                <Button size="lg" variant='outline' className="px-8">Watch Tutorial</Button>
            </Link>
        </div>
        <div>
            <div>
                <Image src="/banner.jpeg" width={1280} height={720} alt="Dashboard Preview" priority className="rounded-lg shadow-2xl border mx-auto" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
