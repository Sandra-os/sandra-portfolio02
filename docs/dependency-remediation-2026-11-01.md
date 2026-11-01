# Dependency remediation — November 1, 2026

The November 1 audit found 1 critical, 8 high and 16 moderate affected-package entries. Next.js and eslint-config-next move together from 16.2.9 to 16.4.3, within the existing major. The release and image-optimizer advisory were reviewed; the new lock resolves sharp 0.35.5 and patched PostCSS. Compatible updates also repair vulnerable source-map, YAML, browser-data, brace and nanoid dependencies. The modern TypeScript parser's minimatch path is scoped to 11.0.1; older callable-API consumers are retained.

After: 0 critical, 0 high, 15 moderate in the complete graph; zero findings with `npm audit --omit=dev`. The remaining entries cascade from legacy minimatch 3 in ESLint/plugins. A global minimatch 11 override changes the callable CommonJS API, and the audit-proposed ESLint downgrade is unsuitable. No audit suppression was added. Review upstream lint/plugin support before attempting the remaining migration. The application uses next/image and a next/og ImageResponse route; not every advisory prerequisite is present, and deployed exploitability/native artifacts were not assessed.

Clean install, lint, type generation/typecheck and production build passed on Node 22.23.0. All 20 browser tests passed across Chromium desktop/phone/tablet and WebKit, covering navigation, retained routes, layout, PDF download, contact links, keyboard/reduced motion, metadata and sitemap. After the final scoped development override, clean install, lint, typecheck and build passed again. No application content/design change was made.

The branch-specific `git.deploymentEnabled` exclusion in vercel.json prevents preview publication from `fix/dependency-vulnerabilities`. Other branches retain their normal defaults. It is required to review this repair without deploying; production remains on its existing release until a separately approved merge/deployment. [Vercel configuration reference](https://vercel.com/docs/project-configuration/git-configuration).

## Complete affected-package inventory

Baseline: `698a2360fc279505a4425d5abc572fe0fc9a96c6`. All affected package entries from the audit are listed, including downstream packages flagged only through a dependency.

| Package | Before resolved versions | After resolved versions | Severity; direct dependency |
| --- | --- | --- | --- |
| @eslint-community/eslint-utils | 4.9.1 | 4.9.1 | moderate; no |
| @eslint/config-array | 0.21.2 | 0.21.2 | moderate; no |
| @eslint/eslintrc | 3.3.5 | 3.3.7 | moderate; no |
| @typescript-eslint/eslint-plugin | 8.61.0 | 8.72.1 | moderate; no |
| @typescript-eslint/parser | 8.61.0 | 8.72.1 | moderate; no |
| @typescript-eslint/type-utils | 8.61.0 | 8.72.1 | moderate; no |
| @typescript-eslint/typescript-estree | 8.61.0 | 8.72.1 | moderate; no |
| @typescript-eslint/utils | 8.61.0 | 8.72.1 | moderate; no |
| baseline-browser-mapping | 2.10.35 | 2.11.34 | moderate; no |
| brace-expansion | 1.1.15, 5.0.6 | 1.1.21, 5.0.12 | high; no |
| browserslist | 4.28.2 | 4.29.5 | high; no |
| eslint | 9.39.4 | 9.39.4 | moderate; yes |
| eslint-config-next | 16.2.9 | 16.4.3 | moderate; yes |
| eslint-plugin-import | 2.32.0 | 2.32.0 | moderate; no |
| eslint-plugin-jsx-a11y | 6.10.2 | 6.10.2 | moderate; no |
| eslint-plugin-react | 7.37.5 | 7.37.5 | moderate; no |
| js-yaml | 4.2.0 | 4.3.2 | high; no |
| minimatch | 10.2.5, 3.1.5 | 11.0.1, 3.1.5 | moderate; no |
| nanoid | 3.3.12 | 3.3.20 | high; no |
| next | 16.2.9 | 16.4.3 | critical; yes |
| postcss | 8.4.31, 8.5.15 | 8.5.23 | high; no |
| sharp | 0.34.5 | 0.35.5 | high; no |
| source-map-js | 1.2.1 | 1.2.2 | high; no |
| typescript-eslint | 8.61.0 | 8.72.1 | moderate; no |
| zod | 4.4.3 | 4.6.7 | high; no |

Underlying advisories:

- [Next.js: Unauthenticated Remote Code Execution in Image Optimization API when SVG files are used](https://github.com/advisories/GHSA-2464-fhr4-w9xw)
- [js-yaml: maxTotalMergeKeys does not limit CPU use for empty merge sources](https://github.com/advisories/GHSA-2883-xcg3-v3hh)
- [nanoid: non-secure generators can loop indefinitely with negative size](https://github.com/advisories/GHSA-28wg-ghj8-5hjv)
- [nanoid: custom generators can loop indefinitely when size is zero](https://github.com/advisories/GHSA-2v37-7h3g-55p8)
- [Next.js: Unauthenticated Remote Code Execution in Image Optimization API when AVIF files are used](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4)
- [Next.js has information disclosure in development server's Model Context Protocol endpoint](https://github.com/advisories/GHSA-39w2-rjm5-chcv)
- [brace-expansion: DoS via exponential-time expansion of consecutive non-expanding {} groups](https://github.com/advisories/GHSA-3jxr-9vmj-r5cp)
- [Next.js: Cache confusion of response bodies for requests with bodies containing invalid UTF-8 byte sequences](https://github.com/advisories/GHSA-4633-3j49-mh5q)
- [Next.js: Unbounded Server Action payload in Edge runtime](https://github.com/advisories/GHSA-4c39-4ccg-62r3)
- [Next.js has cache poisoning of SSG and ISR pages in self-hosted applications](https://github.com/advisories/GHSA-4jqv-mc3x-m676)
- [js-yaml: YAML merge-key chains can force quadratic CPU consumption](https://github.com/advisories/GHSA-52cp-r559-cp3m)
- [JS-YAML: Quadratic CPU consumption in !!omap resolution (3.x and 4.x) — CVE-2026-59870 fix not backported](https://github.com/advisories/GHSA-5p4m-2wfm-xmqj)
- [Next.js: Unauthenticated Remote Code Execution in `use cache` functions returning typed arrays](https://github.com/advisories/GHSA-673q-mjm6-r5xr)
- [source-map-js allows event-loop denial of service through indexed source-map section offsets](https://github.com/advisories/GHSA-68fv-2mgg-jv7q)
- [Next.js: Cache confusion of response bodies for requests with bodies](https://github.com/advisories/GHSA-68g3-v927-f742)
- [PostCSS: Arbitrary file read and information disclosure via attacker-controlled sourceMappingURL in CSS comments](https://github.com/advisories/GHSA-6g55-p6wh-862q)
- [Next.js: Middleware / Proxy bypass in App Router applications using Turbopack and single locale](https://github.com/advisories/GHSA-6gpp-xcg3-4w24)
- [brace-expansion: DoS via uncontrolled recursion in parseCommaParts causing stack exhaustion](https://github.com/advisories/GHSA-6j4f-fj2g-mc7p)
- [Browserslist: Uncaught crash / prototype write via untrusted browserslist-stats.json custom stats (normalizeStats)](https://github.com/advisories/GHSA-73wf-gq98-2v4g)
- [Next.js: Server-Side Request Forgery in Server Actions on custom servers](https://github.com/advisories/GHSA-89xv-2m56-2m9x)
- [Next.js: Unauthenticated disclosure of internal Server Function endpoints](https://github.com/advisories/GHSA-955p-x3mx-jcvp)
- [Browserslist: Unbounded memory growth (no cache eviction) via distinct query results, leading to eventual OOM](https://github.com/advisories/GHSA-c83g-rgw3-j3cx)
- [Next.js has Server-Side Request Forgery in Image Optimization](https://github.com/advisories/GHSA-cjq9-62q9-8jv4)
- [Next.js has information disclosure in App Router metadata image routes via dynamicParams bypass](https://github.com/advisories/GHSA-f87g-xv8r-7p7x)
- [sharp inherited vulnerabilities in libvips: CVE-2026-33327, CVE-2026-33328, CVE-2026-35590, CVE-2026-35591](https://github.com/advisories/GHSA-f88m-g3jw-g9cj)
- [PostCSS: incomplete fix of GHSA-6g55-p6wh-862q — attacker-controlled sourceMappingURL reads arbitrary .map files when `from` is unset](https://github.com/advisories/GHSA-fxqj-rqcc-2cmp)
- [minimatch has potential denial of service via globparts amplification](https://github.com/advisories/GHSA-g3hv-75wg-m249)
- [Next.js: Denial of Service in App Router using Server Actions](https://github.com/advisories/GHSA-m99w-x7hq-7vfj)
- [Next.js has cache poisoning in SSG/ISR rendering that leads to cross-user content substitution and persistent denial of service](https://github.com/advisories/GHSA-mcj8-r9mp-w47p)
- [brace-expansion: DoS via unbounded expansion length causing an out-of-memory process crash](https://github.com/advisories/GHSA-mh99-v99m-4gvg)
- [Zod can exhaust memory while validating oversized constrained collections](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5)
- [Next.js: Unauthenticated Remote Code Execution on windows-hosted servers](https://github.com/advisories/GHSA-p293-qw3h-jr36)
- [Next.js: Denial of Service in App Router using Server Actions](https://github.com/advisories/GHSA-p3m5-59mp-jv5r)
- [Next.js: Server-Side Request Forgery in rewrites via attacker-controlled destination hostname](https://github.com/advisories/GHSA-p9j2-gv94-2wf4)
- [brace-expansion: Quadratic-time expansion of the `{a},b}` rewrite causes CPU denial of service](https://github.com/advisories/GHSA-q2hr-2g5m-vwhr)
- [Next.js: Denial of Service in the Image Optimization API using SVGs](https://github.com/advisories/GHSA-q8wf-6r8g-63ch)
- [brace-expansion: DoS via uncontrolled recursion on nested brace groups causing stack exhaustion](https://github.com/advisories/GHSA-qhr7-859c-m2p7)
- [PostCSS has XSS via Unescaped </style> in its CSS Stringify Output](https://github.com/advisories/GHSA-qx2v-qp2m-jg93)
- [PostCSS: Path Traversal in Previous Source Map Auto-Loading (sourceMappingURL) leads to Arbitrary .map File Disclosure](https://github.com/advisories/GHSA-r28c-9q8g-f849)
- [sharp: Vulnerabilities in libheif: GHSA-g89c-p67h-r497 and GHSA-2jg2-4ch7-h545](https://github.com/advisories/GHSA-rgj7-g3m4-5g8c)
- [brace-expansion: DoS via unbounded intermediate arrays, bypassing the CVE-2026-14257 mitigation](https://github.com/advisories/GHSA-rgw5-rvv9-x895)
- [Next.js: Remote Code Execution in next/og ImageResponse](https://github.com/advisories/GHSA-vcvr-r3jv-pc5j)
- [baseline-browser-mapping process termination on invalid input causes denial of service](https://github.com/advisories/GHSA-w5vr-8v7q-w6rv)
- [sharp : Vulnerability in librsvg dependency CVE-2026-96889](https://github.com/advisories/GHSA-wq5f-xc86-pv6w)

## Residual applicability review

The remaining resolved minimatch is 3.1.5. Its source exports the callable CommonJS API and contains neither `firstPhasePreProcess` nor `optimizationLevel`, the implementation/condition described by the reviewed amplification advisory. That limits the demonstrated applicability of this particular finding to the legacy path; it is an inference from source inspection, not an upstream exemption or a reproduced exploit. The registry range still includes it, so the full audit remains nonzero. Patterns come from development lint configuration rather than application visitors. Keep this visible pending upstream range clarification or compatible plugin migration.

Remaining affected-package entries (including dependency cascades): `@eslint-community/eslint-utils`, `@eslint/config-array`, `@eslint/eslintrc`, `@next/eslint-plugin-next`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `@typescript-eslint/type-utils`, `@typescript-eslint/utils`, `eslint`, `eslint-config-next`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `minimatch`, `typescript-eslint`.
