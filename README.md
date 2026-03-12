# honeypot-form_trap.js

Here is the updated `README.md` file, complete with the autofill protections. I have updated the default ID to `website-url` as the new baseline best practice for your agency, as it provides that extra layer of "belt and suspenders" security against password managers.

You can copy and paste this directly into your GitHub repository to overwrite the previous version.

---

# Webflow Bot-Proof Honeypot Component

A lightweight, accessible, and UX-friendly alternative to reCAPTCHA for Webflow forms. This component uses a self-contained "honeypot" method to trap and block spam bots without forcing human users to solve puzzles.

## 🧠 How It Works

Spam bots scrape websites looking for standard form fields to inject data into. This component includes a visually hidden text field (the "honeypot") that humans cannot see or interact with, but bots will automatically fill out.

If the script detects any input inside this hidden field, it instantly disables the submit button, preventing the bot from sending the form.

## ⚠️ The Autofill Danger (And How We Fix It)

The biggest risk of a honeypot is **browser autofill** (Chrome, Safari, 1Password, etc.). If a human clicks their real email field, their browser might aggressively try to fill in our hidden honeypot field too. If that happens, the legitimate user gets locked out.

To prevent this, our component does two things:

1. **Uses a non-standard autocomplete attribute:** We set `autocomplete="nope"` (browsers ignore unrecognized values and leave the field empty).
2. **Uses a URL field ID:** We use `website-url` instead of a name or email ID. Password managers rarely autofill URLs, but spam bots *love* injecting links.

## ✨ Features

* **Zero friction for users:** No "I'm not a robot" checkboxes or image puzzles.
* **Autofill safe:** Explicitly blocks Chrome and password managers from accidentally triggering the trap.
* **Fully self-contained:** CSS and JavaScript live inside a single HTML Embed within the Form Block.
* **Cross-site copy-pasteable:** Can be copied from one Webflow project and pasted into another without losing functionality.
* **Accessible:** Uses ARIA attributes and tabindex to ensure visually impaired users and screen readers bypass the trap.

## 🏗️ Component Structure

To function correctly, the form must contain the following specific IDs and Custom Attributes:

* **Honeypot Field:** * Element: Standard Text Field
* ID: `website-url`
* Custom Attribute 1: Name: `tabindex` | Value: `-1`
* Custom Attribute 2: Name: `aria-hidden` | Value: `true`
* Custom Attribute 3: Name: `autocomplete` | Value: `nope`


* **Submit Button:**
* Element: Form Submit Button
* ID: `submit-btn`


* **HTML Embed:**
* Placed anywhere inside the main Form Block.
* Contains the styling to hide the honeypot and the logic to disable the button.



## 💻 The Code

Place this inside an HTML Embed within your Form Block. *Note: If you change the IDs on your input field or submit button in Webflow, you must update the IDs in this code to match.*

```html
<style>
  #website-url {
    position: absolute !important;
    left: -9999px !important;
    width: 0px !important;
    height: 0px !important;
    opacity: 0 !important;
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.querySelector("#submit-btn");
    const honeypot = document.querySelector("#website-url");

    if (honeypot && submitBtn) {
      honeypot.addEventListener("input", function () {
        if (honeypot.value.trim() !== "") {
          submitBtn.disabled = true;
          submitBtn.value = "Processing..."; // Optional: changes button text to trick the bot
        }
      });
    }
  });
</script>

```

## 🧪 Testing the Honeypot

Because the field is hidden, you have to use browser developer tools to test the trap.

1. Publish the Webflow site and open the live URL.
2. Right-click the form and select **Inspect** to open Chrome DevTools.
3. Locate the `<input id="website-url">` element in the DOM.
4. Uncheck or delete the `left: -9999px !important;` CSS rule in the Styles panel so the field becomes visible on your screen.
5. Type any text into the honeypot field.
6. Attempt to click the Submit button. It should immediately become disabled/unclickable.

*** This updated version ensures that anyone on your team who uses this component in the future will automatically build it with those autofill fail-safes in place!
