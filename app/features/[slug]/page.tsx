"use client";

import React from "react";
import Image from "next/image";

export default function FeaturePage({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Feature:</h1>
        
        <div className="home-brain_background relative w-full overflow-hidden rounded-lg">
          <Image 
            className="home-brain_floaters w-full"
            src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673eb161f734e9a1b54ff1bc_brain-ai-floaters.avif"
            alt="AI Brain Visualization"
            width={2950}
            height={1600}
            priority
          />
          
          <div className="home-brain_soshie relative">
            <div className="home-brain_video w-background-video w-background-video-atom relative">
              <video 
                id="feature-video"
                autoPlay
                muted
                playsInline
                style={{
                  backgroundImage: "url('https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673ea9f10353f48a685fd1fc_SOshie%20Landing%20from%20Martynas-poster-00001.jpg')"
                }}
                className="w-full object-cover"
              >
                <source src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673ea9f10353f48a685fd1fc_SOshie%20Landing%20from%20Martynas-transcode.mp4" type="video/mp4" />
                <source src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673ea9f10353f48a685fd1fc_SOshie%20Landing%20from%20Martynas-transcode.webm" type="video/webm" />
              </video>
            </div>
            <div className="home-brain_soshie-overlay absolute inset-0 bg-gradient-to-b from-transparent to-[#0D363C]/50"></div>
          </div>
        </div>
        
        <div className="mt-8 prose prose-lg max-w-none">
          <p>
            Discover how our AI-powered feature can transform your construction business operations.
            Contact us to learn more about implementation and pricing.
          </p>
        </div>
      </div>
    </div>
  );
}