# Exist Gründungsstipendium Chatbot

A chatbot utilizing the [Exist Gründungsstipendium](https://www.exist.de/EXIST/Navigation/EN/Start-upFunding/EXIST-Business-Start-up-Grant/exist-business-start-up-grant.html) information with [Next.js](https://nextjs.org/docs).
<br/>
<br/>
![Exist Gründungsstipendium Chatbot](./public/exist.svg)

## Quickstart Setup

### 1. Clone repo

```shell
git clone https://github.com/RichardKruemmel/exist-gruendungsstipendium-chatbot.git
cd exist-gruendungsstipendium-chatbot
```

### 2. Set your [OpenAI API key](https://platform.openai.com/api-keys)

```shell
export OPENAI_API_KEY="sk_..."
```

(or in `.env.example` and rename it to `.env`).

### 3. Set your [OpenAI Assistants ID](https://platform.openai.com/assistants)

```shell
export OPENAI_ASSISTANT_ID="asst_..."
```

#### Note

For detailed instructions on how to set up an OpenAI Assistant, please refer to the [OpenAI Assistants Overview](https://platform.openai.com/docs/assistants/overview).

### 4. Install dependencies

```shell
npm install
```

### 4. Run

```shell
npm run dev
```

### 5. Navigate to [http://localhost:3000](http://localhost:3000).

## Deployment

You can deploy this project to Vercel or any other platform that supports Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fopenai%2Fopenai-assistants-quickstart&env=OPENAI_API_KEY,OPENAI_ASSISTANT_ID&envDescription=API%20Keys%20and%20Instructions&envLink=https%3A%2F%2Fgithub.com%2Fopenai%2Fopenai-assistants-quickstart%2Fblob%2Fmain%2F.env.example)

## Overview

This project serves as a template for creating a chatbot that provides information about the Exist Gründungsstipendium. It utilizes the Assistants API in Next.js with features like [streaming](https://platform.openai.com/docs/assistants/overview/step-4-create-a-run) and [function calling](https://platform.openai.com/docs/assistants/tools/function-calling).

The main logic for chat will be found in the `Chat` component in `app/components/chat.tsx`, and the handlers starting with `api/assistants/threads` (found in `api/assistants/threads/...`). Feel free to start your own project and copy some of this logic in! The `Chat` component itself can be copied and used directly, provided you copy the styling from `app/components/chat.module.css` as well.

### Pages

- Basic Chat Example: [http://localhost:3000/examples/basic-chat](http://localhost:3000/examples/basic-chat)

### Main Components

- `app/components/chat.tsx` - handles chat rendering and [function call](https://platform.openai.com/docs/assistants/tools/function-calling/quickstart?context=streaming&lang=node.js) forwarding

### Endpoints

- `api/assistants` - `POST`: create assistant (only used at startup)
- `api/assistants/threads` - `POST`: create new thread
- `api/assistants/threads/[threadId]/messages` - `POST`: send message to assistant