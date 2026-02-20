# 🖥️ Simple Remote Control (Node.js)

This is a small project that lets you control your computer’s **mouse and keyboard** from your phone using a browser.

It’s basically a DIY WiFi remote for your PC.

I built this using:

* Node.js
* Express
* Socket.IO
* RobotJS

It works great on the same WiFi network.

---

## What You Can Do

* Type text from your phone
* Press keys like Enter, Backspace, Space
* Move the mouse using a touchpad area
* Left click / Right click
* Use it on mobile (touch supported)

It’s simple, lightweight, and works surprisingly well.

---

## How It Works

1. Your phone connects to the Node.js server through Socket.IO.
2. You enter a password.
3. If authenticated, the server listens for commands.
4. RobotJS executes mouse and keyboard actions on your computer.

That’s it. No complicated setup.

---

## Installation

Clone the project:

```bash
git clone https://github.com/yourusername/remote_control_node.git
cd remote_control_node
```

Install dependencies:

```bash
npm install
```

---

## Run It

Start the server:

```bash
node index.js
```

You’ll see something like:

```
Server listening on http://0.0.0.0:5500
```

---

## Connect From Your Phone

1. Make sure your phone and computer are on the same WiFi.
2. Find your computer’s local IP address
   (example: `192.168.1.25`)
3. Open this in your phone’s browser:

```
http://192.168.1.25:5500
```

4. Enter the password (default is `1234`)
5. You’re connected 🎉

---

## Change The Password

Inside `index.js`:

```js
const PASSWORD = "1234";
```

Change that to something secure.

Even better:

```js
const PASSWORD = process.env.REMOTE_PASSWORD;
```

Then run:

```bash
REMOTE_PASSWORD=yourStrongPassword node index.js
```

---

## ⚠️ Important

This project is meant for **local network use only**.

Do NOT expose this to the public internet unless you know what you're doing.

If someone gets access, they can fully control your computer.

---

## Project Structure

```
remote_control_node/
│
├── index.js
├── package.json
└── public/
    ├── index.html
    └── style.css
```

---

## Things You Could Add

If you want to expand it:

* Volume control
* Media keys (play/pause, next)
* Open apps remotely
* Screen streaming
* File transfer
* HTTPS support
* QR code auto-connect
* Turn it into a PWA

---

## Why I Made This

Sometimes you just want:

* A quick remote for your PC
* Control Netflix from bed
* Type on your PC using your phone
* Control a media PC connected to a TV

And this does exactly that.

---

## License

ISC

---

If you want, I can also write:

* A cleaner GitHub showcase version
* A resume-ready portfolio description
* Or help you turn this into a full production-level app 🚀
