// src/components/ContactSection.tsx

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ContactSection = () => {
  return (
    <form className="space-y-3 w-full max-w-sm">
      <Input
        type="text"
        placeholder="Name"
        className="bg-void-black/60 border border-white/10 text-sm focus:border-neon-aqua/60 focus:ring-0"
      />

      <Input
        type="email"
        placeholder="Email"
        className="bg-void-black/60 border border-white/10 text-sm focus:border-neon-aqua/60 focus:ring-0"
      />

      <Textarea
        placeholder="Tell us briefly about your project"
        rows={3}
        className="bg-void-black/60 border border-white/10 text-sm focus:border-neon-aqua/60 focus:ring-0 resize-none"
      />

      <Button
        type="submit"
        className="w-full text-sm px-5 py-2 bg-neon-aqua text-black font-medium hover:bg-neon-aqua/90 transition-colors"
      >
        Send message
      </Button>
    </form>
  );
};