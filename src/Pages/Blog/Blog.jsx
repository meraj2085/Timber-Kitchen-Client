import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <section className="my=20 md:mx-20 mx-5 text-gray-800">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl my-8 font-semibold sm:text-4xl text-center">
          Blog
        </h2>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-purple-600">
              Difference between SQL and NoSQL
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL. The five
              critical differences between SQL vs NoSQL are: SQL databases are
              relational, NoSQL databases are non-relational. SQL databases use
              structured query language and have a predefined schema. NoSQL
              databases have dynamic schemas for unstructured data. SQL
              databases are vertically scalable, while NoSQL databases are
              horizontally scalable. SQL databases are table-based, while NoSQL
              databases are document, key-value, graph, or wide-column stores.
              SQL databases are better for multi-row transactions, while NoSQL
              is better for unstructured data like documents or JSON.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-purple-600">
              What is JWT, and how does it work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-purple-600">
              What is the difference between javascript and NodeJS?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              NodeJS is a cross-platform and opensource Javascript runtime
              environment that allows the javascript to be run on the
              server-side. Nodejs allows Javascript code to run outside the
              browser. Nodejs comes with a lot of modules and mostly used in web
              development. <br />
              Javascript is a Scripting language. It is mostly abbreviated as
              JS. It can be said that Javascript is the updated version of the
              ECMA script. Javascript is a high-level programming language that
              uses the concept of Oops but it is based on prototype inheritance.
              .{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-purple-600">
              How does NodeJS handle multiple requests at the same time?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
