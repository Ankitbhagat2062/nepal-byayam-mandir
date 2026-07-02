"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

const GOLD = "#C5A059";
const CANVAS = "#FDFCF9";
const LINEN = "#F9F6F0";
const INK = "#111111";

const schema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name.")
    .max(80, "Name is too long."),
  phone: z
    .string()
    .min(8, "Phone number is too short.")
    .max(30, "Phone number is too long.")
    .regex(/^[+0-9\s()-]+$/, "Use only digits, spaces, +, ( ) and -."),
  email: z.string().email("Please enter a valid email address."),
  programInterest: z
    .string()
    .min(1, "Please select a program interest."),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters.")
    .max(1200, "Message is too long."),
});

type FormValues = z.infer<typeof schema>;

const programOptions = [
  { value: "body-shaping", label: "Body Shaping" },
  { value: "weight-gaining", label: "Weight Gaining" },
  { value: "executive-program", label: "Executive Program" },
  { value: "zumba", label: "Zumba" },
  { value: "kickboxing", label: "Kickboxing" },
  { value: "yoga", label: "Yoga" },
] as const;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      programInterest: programOptions[0].value,
      message: "",
    },
    mode: "onTouched",
  });

  const [serverMessage, setServerMessage] = React.useState<
    | { type: "success" | "error"; text: string }
    | null
  >(null);

  async function onSubmit(values: FormValues) {
    setServerMessage(null);

    // No backend endpoint specified in this repo; show a premium client-side confirmation.
    // Replace with fetch('/api/...') when available.
    await new Promise((r) => setTimeout(r, 600));

    setServerMessage({
      type: "success",
      text: "VIP inquiry received. Our team will contact you shortly.",
    });
    reset();
  }

  return (
    <section aria-label="Premium inquiry form" className="rounded-3xl border" style={{ borderColor: `${GOLD}55`, backgroundColor: `${LINEN}` }}>
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: INK }}>
              VIP Inquiry
            </h2>
            <p className="mt-2 text-sm sm:text-base" style={{ color: `${INK}CC` }}>
              Share your details — we will route your request to the right program team.
            </p>
          </div>

          <div
            className="hidden sm:flex items-center justify-center rounded-2xl w-14 h-14"
            style={{ border: `1px solid ${GOLD}55`, color: GOLD, background: `${CANVAS}` }}
            aria-hidden="true"
          >
            <Dumbbell className="w-6 h-6" />
          </div>
        </div>

        <form
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold" style={{ color: INK }}>
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className={cn(
                "mt-2 w-full rounded-2xl border bg-[#fff0] px-4 py-3 text-[15px] outline-none transition-[box-shadow,border-color,transform] duration-300",
                "placeholder:text-[#111111]/40"
              )}
              style={{
                borderColor: `${GOLD}33`,
                backgroundColor: `${CANVAS}`,
                color: INK,
              }}
              {...register("fullName")}
              onFocus={(ev) => {
                ev.currentTarget.style.borderColor = GOLD;
                ev.currentTarget.style.boxShadow = `0 0 0 4px ${GOLD}33`;
              }}
              onBlur={(ev) => {
                ev.currentTarget.style.borderColor = `${GOLD}33`;
                ev.currentTarget.style.boxShadow = "none";
              }}
            />
            {errors.fullName?.message ? (
              <p className="mt-1 text-xs" style={{ color: "#C62828" }}>
                {errors.fullName.message}
              </p>
            ) : null}
          </div>

          <div>
            <label className="block text-sm font-semibold" style={{ color: INK }}>
              Active Phone Number
            </label>
            <input
              type="tel"
              placeholder="e.g. +977 98xxxxxxx"
              className={cn(
                "mt-2 w-full rounded-2xl border px-4 py-3 text-[15px] outline-none transition-[box-shadow,border-color] duration-300"
              )}
              style={{
                borderColor: `${GOLD}33`,
                backgroundColor: `${CANVAS}`,
                color: INK,
              }}
              {...register("phone")}
              onFocus={(ev) => {
                ev.currentTarget.style.borderColor = GOLD;
                ev.currentTarget.style.boxShadow = `0 0 0 4px ${GOLD}33`;
              }}
              onBlur={(ev) => {
                ev.currentTarget.style.borderColor = `${GOLD}33`;
                ev.currentTarget.style.boxShadow = "none";
              }}
            />
            {errors.phone?.message ? (
              <p className="mt-1 text-xs" style={{ color: "#C62828" }}>
                {errors.phone.message}
              </p>
            ) : null}
          </div>

          <div>
            <label className="block text-sm font-semibold" style={{ color: INK }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className={cn(
                "mt-2 w-full rounded-2xl border px-4 py-3 text-[15px] outline-none transition-[box-shadow,border-color] duration-300"
              )}
              style={{
                borderColor: `${GOLD}33`,
                backgroundColor: `${CANVAS}`,
                color: INK,
              }}
              {...register("email")}
              onFocus={(ev) => {
                ev.currentTarget.style.borderColor = GOLD;
                ev.currentTarget.style.boxShadow = `0 0 0 4px ${GOLD}33`;
              }}
              onBlur={(ev) => {
                ev.currentTarget.style.borderColor = `${GOLD}33`;
                ev.currentTarget.style.boxShadow = "none";
              }}
            />
            {errors.email?.message ? (
              <p className="mt-1 text-xs" style={{ color: "#C62828" }}>
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold" style={{ color: INK }}>
              Selected Program Interest
            </label>
            <div className="mt-2 relative">
              <select
                className={cn(
                  "w-full appearance-none rounded-2xl border px-4 py-3 text-[15px] outline-none transition-[box-shadow,border-color] duration-300"
                )}
                style={{
                  borderColor: `${GOLD}33`,
                  color: INK,
                  backgroundColor: `${CANVAS}`,
                }}
                {...register("programInterest")}
                onFocus={(ev) => {
                  ev.currentTarget.style.borderColor = GOLD;
                  ev.currentTarget.style.boxShadow = `0 0 0 4px ${GOLD}33`;
                }}
                onBlur={(ev) => {
                  ev.currentTarget.style.borderColor = `${GOLD}33`;
                  ev.currentTarget.style.boxShadow = "none";
                }}
              >
                {programOptions.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                style={{ color: GOLD }}
              >
                ▾
              </span>
            </div>
            {errors.programInterest?.message ? (
              <p className="mt-1 text-xs" style={{ color: "#C62828" }}>
                {errors.programInterest.message}
              </p>
            ) : null}
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold" style={{ color: INK }}>
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us what you want to achieve — weight gain, shaping, fitness, or group training…"
              className={cn(
                "mt-2 w-full resize-none rounded-2xl border px-4 py-3 text-[15px] outline-none transition-[box-shadow,border-color] duration-300"
              )}
              style={{
                borderColor: `${GOLD}33`,
                color: INK,
                backgroundColor: `${CANVAS}`,
              }}
              {...register("message")}
              onFocus={(ev) => {
                ev.currentTarget.style.borderColor = GOLD;
                ev.currentTarget.style.boxShadow = `0 0 0 4px ${GOLD}33`;
              }}
              onBlur={(ev) => {
                ev.currentTarget.style.borderColor = `${GOLD}33`;
                ev.currentTarget.style.boxShadow = "none";
              }}
            />
            {errors.message?.message ? (
              <p className="mt-1 text-xs" style={{ color: "#C62828" }}>
                {errors.message.message}
              </p>
            ) : null}
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl py-3 text-center font-extrabold tracking-wide transition-[transform,filter,box-shadow] duration-300 disabled:opacity-60"
              style={{
                backgroundColor: INK,
                color: GOLD,
                boxShadow: "0 18px 60px rgba(0,0,0,0.18)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.filter = "brightness(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.filter = "none";
              }}
            >
              {isSubmitting ? "Submitting…" : "Submit VIP Inquiry"}
            </button>

            {serverMessage ? (
              <p
                className="mt-3 text-xs font-semibold"
                style={{
                  color: serverMessage.type === "success" ? "#0B6B3A" : "#C62828",
                }}
              >
                {serverMessage.text}
              </p>
            ) : (
              <p className="mt-3 text-xs" style={{ color: `${INK}66` }}>
                By submitting, you agree to be contacted regarding your inquiry.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

