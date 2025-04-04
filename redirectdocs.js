async function initExtension() {
  // Create small individual rules to keep Chrome happy
  const rules = [];
  let ruleId = 1;
  const versions = [
    '7', '7.0', '7.1', '7.2', '7.3', '7.4', 
    '8', '8.0', '8.1', '8.2', '8.3', '8.4', 
    '9', '9.0', '9.1', '9.2', '9.3', '9.4', '9.5', '9.6',
    '10', '11', '12', '13', '14', '15', '16', '17'
  ];
  const deprecatedPages = [
    'archive-recovery-settings',
    'recovery-target-settings',
    'app-createlang',
    'app-droplang',
    'indexcost',
    'inherit',
    'manage',
    'start-manage-db',
    'failure',
    'failure-disk-failed',
    'programmer-client',
    'developer',
    'part-developer',
    'release'
  ];
  for (const version of versions) {
    rules.push({
      id: ruleId++,
      priority: 1, //Lower priority than non-redirects
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: "https://www.postgresql.org/docs/current/\\1?pg-docs-bot-redirected=https://www.postgresql.org/docs/" + version + "/\\1"
        }
      },
      condition: {
        regexFilter: `^https://www\\.postgresql\\.org/docs/${version}/([^/]+\\.html)`,
        resourceTypes: ["main_frame"]
      }
    });
  }
  // Prevent redirects when already on postgresql.org
  rules.push({
    id: ruleId++,
    priority: 3, // Higher priority than redirects and deprecated pages
    action: {
      type: "allow"
    },
    condition: {
      urlFilter: "https://www.postgresql.org/docs/",
      initiatorDomains: ["postgresql.org", "www.postgresql.org"],
      resourceTypes: ["main_frame"]
    }
  });
  for (const version of versions) {
    for (const page of deprecatedPages) {
      rules.push({
        id: ruleId++,
        priority: 2, // Higher priority than redirects
        action: {
          type: "allow" // Don't redirect
        },
        condition: {
          urlFilter: `https://www.postgresql.org/docs/${version}/${page}.html`,
          resourceTypes: ["main_frame"]
        }
      });
    }
  }
  // Register the rules
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: Array.from({length: ruleId - 1}, (_, i) => i + 1),
    addRules: rules
  });
  console.log('pg_docs_bot: Registered', rules.length, 'redirect rules');
}
initExtension();