import { Link } from "wouter";
import { HeartCrack } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-red-50">
      <div className="text-center space-y-6">
        <HeartCrack className="w-24 h-24 text-red-500 mx-auto" />
        <h1 className="text-4xl font-handwriting text-accent">
          Oops! 404 Page Not Found 😟
        </h1>
        <p className="text-gray-500 font-body italic">
          Looks like we got lost on the way to love.
        </p>
        <br />
        <Link href="/enchanted-hearts/">
          <a className="inline-block px-6 py-3 bg-accent text-white rounded-full font-medium transition-colors">
            Return Home
          </a>
        </Link>
      </div>
    </div>
  );
}
