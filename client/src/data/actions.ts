"use server";

export async function subscribeAction(formData: FormData) {
  console.log("Our first server action");
  const email = formData.get("email");
  console.log(email, "Our email input from form");
}
