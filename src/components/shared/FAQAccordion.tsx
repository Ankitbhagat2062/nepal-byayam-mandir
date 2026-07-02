"use client";

import React from "react";
import { CircleHelp } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AboutFaqs, HomeFaqs } from "@/lib/constants";

export default function FAQAccordion({ page }: { page: string }) {
  let faqs;
  if (page === "home") {
    faqs = HomeFaqs;
  } else {
    faqs = AboutFaqs; // Default to AboutFaqs if no matching page is found
  }
  type FaqValue = (typeof faqs)[number]["value"];
  const [openValue, setOpenValue] = React.useState<FaqValue | undefined>(faqs[0].value);



  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4">
        <div className="sticky top-24 rounded-3xl border border-border/60 bg-card/60 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center">
              <CircleHelp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-extrabold tracking-tight">Quick Answers</h3>
              <p className="text-xs text-muted-foreground">Everything you need to know before you start.</p>
            </div>
          </div>

          <ul className="mt-5 space-y-3 text-xs text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Membership & rates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Programs overview</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Facility & safety notes</span>
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-border/50 bg-background/50 p-4">
            <p className="text-[10px] uppercase tracking-widest font-bold text-primary">Tip</p>
            <p className="text-xs text-muted-foreground leading-relaxed mt-1">
              If you can’t find your question, use the AI Assistant in the corner for instant guidance.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-8 w-full">
        <div className="rounded-3xl border border-border/60 bg-card/40 overflow-hidden">
          <Accordion
            value={openValue as any}
            onValueChange={(v) => setOpenValue((v as any) || undefined)}
            className="w-full"
          >
            {faqs.map((faq) => {
              const Icon = faq.icon;

              return (
                <AccordionItem key={faq.value} value={faq.value} className="border-t border-border/60 first:border-t-0">
                  <AccordionTrigger className="w-full px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </span>
                      <span className="text-left font-semibold text-sm text-foreground">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-10">
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

