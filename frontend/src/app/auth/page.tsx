/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9VAH4FOmwJ4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-muted">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 rounded-2xl bg-background p-6 shadow-xl md:grid-cols-2">
        <div className="relative hidden overflow-hidden rounded-xl md:block">
          <Carousel className="h-full w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
                  <Image
                    src="https:dummyimage.com/400x300"
                    width={400}
                    height={300}
                    alt="Onboarding Image 1"
                    className="rounded-xl"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-bold">Streamlined Workflow</h3>
                    <p className="text-muted-foreground">
                      Boost your productivity with our intuitive tools and
                      seamless integrations.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
                  <Image
                    src="https:dummyimage.com/400x300"
                    width="400"
                    height="300"
                    alt="Onboarding Image 2"
                    className="rounded-xl"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-bold">Secure and Reliable</h3>
                    <p className="text-muted-foreground">
                      Trust our robust security measures to protect your
                      sensitive data.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
                  <Image
                    src="https:dummyimage.com/400x300"
                    width="400"
                    height="300"
                    alt="Onboarding Image 3"
                    className="rounded-xl"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-bold">
                      Scalable and Flexible
                    </h3>
                    <p className="text-muted-foreground">
                      Adapt to your growing needs with our scalable and
                      customizable solutions.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background p-2 shadow-md">
              <ChevronLeftIcon className="h-5 w-5" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background p-2 shadow-md">
              <ChevronRightIcon className="h-5 w-5" />
            </CarouselNext>
          </Carousel>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Welcome Back!</h2>
            <p className="text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>
          <div className="grid w-full max-w-sm gap-4">
            <Button variant="outline">
              <ChromeIcon className="mr-2 h-5 w-5" />
              Sign in with Google
            </Button>
            <Button variant="outline">
              <FacebookIcon className="mr-2 h-5 w-5" />
              Sign in with Facebook
            </Button>
            <Button variant="outline">
              <TwitterIcon className="mr-2 h-5 w-5" />
              Sign in with Twitter
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="text-sm font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full">Sign in</Button>
            <div className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="#"
                className="font-medium text-primary hover:underline"
                prefetch={false}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function FacebookIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
