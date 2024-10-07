import Head from 'next/head';
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useWeb3Forms from "@web3forms/react";
import { loadEnvConfig } from '@next/env';

export default function Publications(){
  console.log("publications.js loaded");

  return (
    <>
      <Head>
        <title>Publications - Hosei Nakajima</title>
      </Head>
      <div className="mx-10">
        <h1 className="mt-5 mb-3 text-3xl font-semibold tracking-tight text-center">Publications</h1>

        <div className="py-3 text-lg">
          <p>These are my publications. </p>
          <p></p>
        </div>

        {/* TODO add descriptions */}
        <ol>
          <li key={1}>
            <Link href="https://doi.org/10.1016/j.ygeno.2021.04.020" class="hover:text-blue-500">
              Loss of coordinated expression between ribosomal and mitochondrial genes revealed by comprehensive characterization of a large family with a rare Mendelian disorder
            </Link>
          </li>
          <li key={2}>
            <Link href="https://iovs.arvojournals.org/article.aspx?articleid=2779820" class="hover:text-blue-500">
              Artificial neural network-based classification of Age-related Macular Degeneration using gene expression profiles.
            </Link>
          </li>
        </ol>
      </div>
    </>
  );
}
