import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
	  remotePatterns: [
	      { protocol: 'https', hostname: 'ac.goit.global' },
		  { protocol: 'https', hostname: 'ftp.goit.study' },
		  { protocol: 'https', hostname: 'isorepublic.com' }
	    ]
	}
};

export default nextConfig;
