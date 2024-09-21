import React, { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import classses from "./NewsletterSignup.module.css";

const NewsletterSignup = () => {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [state, data]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classses.newsletter}
    >
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
};

export default NewsletterSignup;
