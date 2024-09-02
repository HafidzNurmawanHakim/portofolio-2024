import React, { useRef, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

import Slide from "../Slide";
import Container from "../Container";

import { useResponsive } from "@/utils/hooks/useResponsive";
import { fontFira, fontMono } from "@/config/fonts";

function ContactSection() {
  const [open, setOpen] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const isMobile = useResponsive("xs");

  const sendEmail = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const isEmptyField = Object.values(formProps).some((value) => !value);

    if (isEmptyField) {
      return toast.error("Please fill in all columns");
    }

    setLoading(true);
    setLoading(true);
    toast.promise(
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILID as string,
          process.env.NEXT_PUBLIC_EMAIL_TEMP_ID as string,
          form.current || "",
          {
            publicKey: process.env.NEXT_PUBLIC_KEY_EMAIL,
          },
        )
        .then(
          (value) => {
            setLoading(false);
            form.current?.reset();

            return true;
          },
          (error) => {
            setLoading(false);

            console.log("FAILED...", error);

            return false;
          },
        ),
      {
        loading: "Send Email",
        success: <b>Email sent!</b>,
        error: <b>Could not send email.</b>,
      },
    );
  };
  const text = "If you’re building the next generation digital product".split(
    " ",
  );

  return (
    <Container className="max-w-4xl mb-4" id="contact">
      <div className="absolute flex items-center top-[60%] lg:top-inherit gap-4 right-0 lg:left-0 ">
        <span className="h-1 w-20 lg:w-40 bg-background-700" />
        <div
          className={clsx(
            "flex flex-col text-tiny md:text-sm w-40",
            fontFira.className,
          )}
        >
          <h3>Practice Make </h3>
          <h3 className="self-end">Me Perfect</h3>
        </div>
      </div>
      <div className="pl-10 lg:pl-40 text-start">
        <article className="flex flex-col gap-10">
          <h2 className={clsx("text-4xl leading-tight", fontFira.className)}>
            {text.map((el, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, translateX: 40 }}
                transition={{
                  duration: 1,
                  delay: i / 10,
                }}
                whileInView={{ opacity: 1, translateX: 0 }}
              >
                {el}{" "}
              </motion.span>
            ))}
          </h2>
          <p className={clsx(fontMono.className)}>
            Don’t miss out on aesthetic UI and industry standard
            functionalities. Let&apos;s bring your vision to life
          </p>
        </article>
        <div className="flex-gap-4 mt-10">
          <Button onClick={() => setOpen(!open)}>Start a Project</Button>
          {/* <Button>Buy me a Coffee</Button> */}
        </div>
      </div>

      <Slide
        triggerByButton
        className="mt-[5rem]"
        delay={0}
        direction="down"
        trigger={open}
      >
        <div className="w-full text-center flex flex-col items-center gap-10">
          <form
            ref={form}
            className="max-w-screen w-[20rem] md:w-[36rem] mx-auto space-y-4"
            onSubmit={sendEmail}
          >
            <Input
              fullWidth
              isRequired={true}
              name="user_name"
              placeholder="Enter your name"
              size={isMobile ? "sm" : "lg"}
            />
            <Input
              fullWidth
              isRequired={true}
              name="user_email"
              placeholder="Enter your email"
              size={isMobile ? "sm" : "lg"}
            />
            <Textarea
              fullWidth
              isRequired={true}
              name="message"
              placeholder="message"
              size={isMobile ? "sm" : "lg"}
            />

            <div className="text-end">
              <Button isDisabled={loading} isLoading={loading} type="submit">
                Send
              </Button>
            </div>
          </form>
        </div>
      </Slide>
    </Container>
  );
}

export default ContactSection;
