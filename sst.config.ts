// File: sst.config.ts

import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

import * as cdk from "aws-cdk-lib";
import { HostedZone } from "aws-cdk-lib/aws-route53";

const ROOT_DOMAIN_NAME = "learnwithkru.com"; // Your domain name here
const DOMAIN_NAME = `${ROOT_DOMAIN_NAME}`; // Any prefix you want, or just the root domain

export default {
  config(_input) {
    return {
      name: "my-app",
      region: "us-east-1", // Keep it that way
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      // Look up hosted zone
      const hostedZone = HostedZone.fromLookup(stack, "HostedZone", {
        domainName: DOMAIN_NAME,
      });
      // Create a SSL certificate linked to the hosted zone
      const certificate = new cdk.aws_certificatemanager.Certificate(stack, "Certificate", {
        domainName: DOMAIN_NAME,
        validation: cdk.aws_certificatemanager.CertificateValidation.fromDns(hostedZone),
      });

      // Add the hosted zone and the certificate to the Next.js site
      const site = new NextjsSite(stack, "site", {
        customDomain: {
          domainName: DOMAIN_NAME,
          domainAlias: `www.${DOMAIN_NAME}`,
          cdk: {
            hostedZone,
            certificate,
          }
        }
      });

      stack.addOutputs({
        SiteUrl: site.customDomainUrl,
      });
    });
  },
} satisfies SSTConfig;