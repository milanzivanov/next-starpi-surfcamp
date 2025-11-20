"use client";
import type { SubscribeProps } from "@/types";
import { subscribeAction } from "@/data/actions";

export function Subscribe({
  headline,
  content,
  placeholder,
  buttonText
}: Readonly<SubscribeProps>) {
  return (
    <section className="newsletter container">
      <div className="newsletter__info">
        <h4>{headline}</h4>
        <p className="copy">{content}</p>
      </div>
      <form className="newsletter__form" action={subscribeAction}>
        <input
          name="email"
          type="email"
          placeholder={placeholder}
          className={`newsletter__email`}
        />
        <button
          type="submit"
          className="newsletter__subscribe btn btn--turquoise btn--medium"
        >
          {buttonText}
        </button>
      </form>
    </section>
  );
}
