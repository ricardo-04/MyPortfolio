import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Enhanced Log Analysis — Critical Software | Ricardo Pombo",
  description:
    "How I built an AI-powered tool to automatically analyze automotive vehicle logs at Critical Software, combining Machine Learning pipelines (Random Forest, DBSCAN, LSTM) with a Retrieval-Augmented Generation system and a local LLM.",
};

const tags = [
  "Python",
  "Scikit-learn",
  "TensorFlow",
  "Keras",
  "Random Forest",
  "DBSCAN",
  "LSTM",
  "RAG",
  "LangChain",
  "Hugging Face",
  "Ollama (Gemma)",
  "FastAPI",
  "Streamlit",
  "PostgreSQL / pgvector",
  "Podman",
];

function Figure({
  src,
  alt,
  caption,
  width,
  height,
  dark = false,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  dark?: boolean;
}) {
  return (
    <figure className="my-8">
      <div
        className={`overflow-hidden rounded-xl border border-slate-200 ${
          dark ? "bg-slate-900" : "bg-white"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="mx-auto h-auto w-full max-w-2xl object-contain p-3"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm text-slate-500">
        {caption}
      </figcaption>
    </figure>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 scroll-mt-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 text-[16px] leading-8 text-slate-700">{children}</p>;
}

export default function CriticalSoftwareArticle() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
          >
            ← Back to portfolio
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Case study
          </span>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-6 pb-24">
        {/* Header */}
        <header className="pt-12">
          <div className="flex items-center gap-3 text-sm font-medium text-indigo-600">
            <span>Critical Software</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">Internship · Feb–Jun 2025</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            AI-Enhanced Semantic Analysis of Vehicle Logs
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            During my internship at Critical Software I built an AI-powered tool
            to automatically analyze vehicle log files from the automotive
            industry — combining classic Machine Learning pipelines with a
            Retrieval-Augmented Generation system running a local LLM, so teams
            could detect error patterns and query their logs in plain English.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800">
            Note: the source code is confidential and stays at Critical
            Software, so this write-up focuses on the ideas, the models and the
            results, with figures taken from my internship report.
          </p>
        </header>

        {/* Introduction */}
        <H2>The problem</H2>
        <P>
          Modern cars run a huge amount of software. When that software is
          tested — for example the infotainment system of a vehicle — the
          Electronic Control Units (ECUs) produce enormous log files describing
          everything that happened during each test. Buried inside those logs
          are the events that actually matter: failures, crashes and unexpected
          behaviors.
        </P>
        <P>
          Reading those logs by hand is slow, error-prone and does not scale.
          You need to know exactly what you are looking for, and a single test
          run can generate thousands of lines. The goal of my project was to
          take that manual effort away: build a tool that automatically{" "}
          <strong>detects, classifies and groups</strong> the relevant events in
          a log file, and lets a tester simply ask questions about the data
          instead of scrolling through it.
        </P>
        <P>
          Machine Learning is a natural fit here, because the whole job is about
          finding complex patterns in data and learning from examples — exactly
          what these algorithms are good at.
        </P>

        {/* How ML learns */}
        <H2>How does a model actually &ldquo;learn&rdquo;?</H2>
        <P>
          Before jumping into the project, it helps to understand the two
          families of Machine Learning I relied on.
        </P>
        <P>
          In <strong>supervised learning</strong>, the model is trained on{" "}
          <em>labeled</em>{" "}examples: each log entry comes with the right answer
          (for instance, &ldquo;this line is an error&rdquo; or &ldquo;this line
          is normal&rdquo;). During training the model repeatedly makes a
          prediction, measures how wrong it was using a{" "}
          <em>loss function</em>, and nudges its internal parameters to make the
          error smaller next time. Repeat this thousands of times and the model
          gradually learns to map inputs to the correct outputs. This is how the{" "}
          <strong>Random Forest</strong> classifier in my project learns to tell
          errors apart from normal events.
        </P>
        <P>
          In <strong>unsupervised learning</strong>, there are no labels at all.
          The algorithm has to discover structure on its own — grouping similar
          things together. That is what <strong>DBSCAN</strong> does: it finds
          dense regions of similar log events and treats everything else as
          noise, without anyone telling it what the groups should be.
        </P>
        <P>
          A recurring danger when training any model is{" "}
          <strong>overfitting</strong>: the model stops learning the general
          pattern and instead memorizes the training data — like a student who
          learns the answers by heart instead of understanding the subject. It
          looks perfect on data it has already seen, then fails on anything new.
          Avoiding overfitting was a constant theme during development.
        </P>

        {/* From text to numbers */}
        <H2>From raw text to numbers</H2>
        <P>
          Models cannot read text — they need numbers. The most informative part
          of each log is the <code>Payload</code> field, which is free text, so
          the first real step was turning it into a numerical representation.
        </P>
        <P>
          I used <strong>TF-IDF vectorization</strong> (Term Frequency–Inverse
          Document Frequency), which converts text into vectors that emphasize
          the words that are distinctive to a log line while downplaying common,
          uninformative ones. After that, I applied{" "}
          <strong>standardization</strong> (so every feature has mean 0 and
          standard deviation 1), which keeps any single feature from dominating
          just because its raw numbers are larger. These two steps gave me clean,
          consistent input for the Random Forest classifier and the DBSCAN
          clustering that followed.
        </P>

        {/* Random Forest */}
        <H2>Classifying errors with Random Forest</H2>
        <P>
          A <strong>Random Forest</strong> is an ensemble of decision trees.
          Each tree is trained on a slightly different random subset of the data
          and features, and the final prediction is the majority vote of all the
          trees. Because the trees disagree in different ways, averaging them out
          dramatically reduces the overfitting that a single decision tree would
          suffer from.
        </P>
        <P>
          My first attempt actually went wrong in an instructive way. I cleaned
          the data so aggressively — filtering down to a few classes — that the
          dataset became tiny. With so little data, the model stopped learning
          and simply memorized the answers: a textbook case of overfitting.
        </P>
        <P>
          Backing off to a lighter cleaning step (only removing empty and null
          rows, then vectorizing the relevant column) fixed it. The learning
          curve below is more nuanced: the validation loss consistently
          decreases as more training examples are added, suggesting that the
          model benefits from additional data. However, the persistent gap
          between training and validation loss indicates that some degree of
          overfitting may still be present.
        </P>

        <Figure
          src="/critical/rf-learning-curve.png"
          alt="Random Forest learning curve"
          caption="Figure — Learning curve: validation loss falls as the training set grows, though the gap to the training loss hints at some residual overfitting."
          width={864}
          height={470}
        />

        <P>
          The confusion matrix confirms the result on the test set: the model
          places almost every example on the correct diagonal — 114 negatives
          and 394 positives classified correctly, with essentially no mistakes.
          That works out to about <strong>99% accuracy</strong>, with precision,
          recall and F1-score all very close to 1 (but deliberately not exactly
          1, which would itself be a warning sign of overfitting).
        </P>

        <Figure
          src="/critical/rf-confusion-matrix.png"
          alt="Random Forest confusion matrix"
          caption="Figure — Confusion matrix for the Random Forest classifier: predictions land almost entirely on the diagonal."
          width={647}
          height={516}
        />

        <P>
          I also tried <strong>XGBoost</strong> (gradient-boosted trees) as an
          alternative. It reached a high headline accuracy of ~98%, but precision
          and recall for the minority class collapsed to zero — the data was
          imbalanced and the model simply favored the majority class. A great
          reminder that a single accuracy number can hide a broken model, and
          that Random Forest was the better fit here.
        </P>

        {/* DBSCAN */}
        <H2>Finding patterns with DBSCAN</H2>
        <P>
          Classification answers &ldquo;is this an error?&rdquo;. But I also
          wanted to discover groups of similar events without deciding the
          categories in advance. I started with <strong>K-Means</strong>, but it
          forces you to choose the number of clusters up front and assumes
          clusters are nice round blobs — a poor match for messy log data.
        </P>
        <P>
          <strong>DBSCAN</strong> (Density-Based Spatial Clustering of
          Applications with Noise) is far better suited to this. It groups points
          that sit in dense regions, lets clusters take any shape, and — crucially
          — labels sparse outliers as <em>noise</em> instead of forcing them into
          a group. It also figures out the number of clusters by itself; you only
          tune the neighborhood radius <code>eps</code>.
        </P>

        <Figure
          src="/critical/dbscan-clusters.png"
          alt="DBSCAN clusters of logs visualized in 2D"
          caption="Figure — Log events projected to 2D (via SVD) and colored by the cluster DBSCAN assigned them."
          width={578}
          height={455}
        />

        <P>
          Visualizing the clusters (after reducing the vectors to two dimensions
          with SVD) shows clear, irregularly shaped groups — including a
          dedicated &ldquo;noise&rdquo; group for events that do not belong
          anywhere. That granularity is exactly what you want for test logs,
          where error patterns rarely follow regular, predictable shapes. After
          these experiments, <strong>Random Forest + DBSCAN</strong> became the
          core pair driving the tool.
        </P>

        {/* LSTM */}
        <H2>Going deeper: an LSTM for sequential logs</H2>
        <P>
          Random Forest treats each row as an isolated set of features. But logs
          are <em>sequential</em> — the order of messages carries meaning. To
          capture that, I built a Deep Learning model: an{" "}
          <strong>LSTM</strong> (Long Short-Term Memory), a type of recurrent
          neural network designed to remember context across a sequence.
        </P>
        <P>
          I aggregated consecutive log lines into text blocks, cleaned and
          normalized them, then used TensorFlow&apos;s tokenization and padding
          to turn each block into a fixed-length integer sequence (
          <code>max_len = 200</code>). To handle class imbalance I computed class
          weights and applied them during training. The network itself was an{" "}
          <code>Embedding</code> layer, an <code>LSTM</code> layer with 32 units,
          and <code>Dropout</code> layers for regularization — defined
          declaratively with Keras.
        </P>

        <Figure
          src="/critical/lstm-accuracy.png"
          alt="LSTM accuracy and loss curves over training epochs"
          caption="Figure — LSTM training: accuracy climbs above 0.98 while training and validation loss fall together over the epochs."
          width={691}
          height={394}
        />

        <P>
          After only five epochs the LSTM reached strong accuracy with training
          and validation curves moving together — no sign of overfitting. The big
          advantage over Random Forest is that the LSTM understands{" "}
          <strong>order and context</strong> between tokens, letting it pick up
          on patterns in the message flow that a tree-based model, looking at
          isolated features, simply cannot see.
        </P>

        {/* RAG */}
        <H2>Asking questions in plain English: the RAG system</H2>
        <P>
          Detecting and grouping errors is useful, but I wanted testers to be
          able to just <em>ask</em>: &ldquo;what does this media app log
          mean?&rdquo;. That is where{" "}
          <strong>Retrieval-Augmented Generation (RAG)</strong> comes in. Instead
          of expecting a language model to magically know about your private
          logs, RAG <em>retrieves</em> the most relevant pieces of your data
          first, then hands them to the model as context to ground its answer.
        </P>
        <P>The pipeline works like this:</P>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-8 text-slate-700">
          <li>
            Each processed CSV is split into <strong>chunks</strong> and turned
            into vector <strong>embeddings</strong> using Hugging Face models via
            LangChain.
          </li>
          <li>
            Those vectors are stored in <strong>PostgreSQL with pgvector</strong>
            , which can run fast similarity searches directly inside the
            database.
          </li>
          <li>
            When a question arrives, the system finds the most similar chunks and
            passes them, together with the question, to a{" "}
            <strong>local LLM (Gemma, served with Ollama)</strong>.
          </li>
          <li>
            Running the model <strong>locally</strong> matters: the log data
            never leaves the machine, which keeps it private.
          </li>
        </ul>

        <Figure
          src="/critical/rag-answer.png"
          alt="Streamlit interface showing a natural-language answer generated by the RAG system"
          caption="Figure — A real RAG answer: the user asks about a media app log and the local LLM replies with a structured, grounded explanation."
          width={856}
          height={1164}
          dark
        />

        {/* Architecture */}
        <H2>Putting it together: the architecture</H2>
        <P>
          To keep everything maintainable and scalable, I structured the system
          following the <strong>Model-View-Controller</strong> pattern as a set
          of microservices, each running in its own{" "}
          <strong>Podman</strong> container:
        </P>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-8 text-slate-700">
          <li>
            a <strong>FastAPI</strong> backend that handles uploads, runs the
            trained models and talks to the database;
          </li>
          <li>
            a <strong>Streamlit</strong> frontend where testers upload CSVs,
            index them and ask questions;
          </li>
          <li>
            a dedicated <strong>LLM service</strong> (Ollama + Gemma) for the RAG
            answers.
          </li>
        </ul>

        <Figure
          src="/critical/architecture.png"
          alt="Component diagram of the intelligent log analysis system"
          caption="Figure — Component diagram: three containers (Streamlit frontend, FastAPI backend, local LLM) communicating through well-defined interfaces."
          width={825}
          height={586}
        />

        <P>
          The FastAPI backend exposes a small, clean API — endpoints to check
          health, upload a CSV, index it, and ask the LLM a question:
        </P>

        <Figure
          src="/critical/fastapi-docs.png"
          alt="FastAPI auto-generated Swagger documentation"
          caption="Figure — The auto-generated FastAPI docs: /health, /upload, /index_csv and /ask_llm."
          width={1140}
          height={639}
        />

        <P>
          And the Streamlit frontend ties it all together into a single,
          friendly interface — upload a log, choose which columns to embed, index
          it, and start asking questions:
        </P>

        <Figure
          src="/critical/streamlit-ui.png"
          alt="Streamlit user interface for the log analysis tool"
          caption="Figure — The Streamlit interface where testers upload, index and query their log files."
          width={1255}
          height={777}
          dark
        />

        {/* Wrap up */}
        <H2>What I took away</H2>
        <P>
          This was the project where everything came together for me: classic
          Machine Learning (Random Forest, DBSCAN), Deep Learning (an LSTM with
          TensorFlow and Keras), and modern Generative AI (a privacy-preserving
          RAG system with a local LLM) — all wired into a real, containerized
          architecture that a team could actually use.
        </P>
        <P>
          Beyond the models, the biggest lessons were practical: data preparation
          makes or breaks a model, a single accuracy number can be dangerously
          misleading, and the right algorithm depends entirely on the shape of
          your data. It was also my first taste of building software in a real
          business environment, at a company that builds safety- and
          mission-critical systems for industries from automotive to aerospace.
        </P>

        <div className="mt-14 border-t border-slate-200 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
          >
            ← Back to portfolio
          </Link>
        </div>
      </article>
    </div>
  );
}
