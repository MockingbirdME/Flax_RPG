const html = `
    <p>Traits have a number of properties:
    <ul>
    <li><b>Requirements:</b> some traits have one or more requirements, these may be a specific strain limitation, some number of other traits with a shared keyword, or another specific trait(s).</li>
    <li><b>Keywords:</b> nearly all traits have at least one keyword, represented by italic words at the beginning of the traits description; some keywords are only important for other traits that reference them while other's have specific meanings as detailed below.</li>
    <ul>
    <li><i>Advanced:</i> a character may have only one advanced trait plus one advanced trait for every 3 levels they've gained.</li>
    <li><i>Heroic:</i> a character may have only one heroic trait for every 5 levels they've gained.</li>
    <li><i>Epic:</i> a character may have only one epic trait for every 20 levels they've gained.</li>
    <li><i>Starting:</i> a character can only take this trait at character creation or with allowance from the GM after they've woven a reason for it into the storyline.</li>
    <li><i>Character Type:</i> a character may have only one character type trait and can only take it at creation.</li>
    </ul>
    </ul>
    </p>
`;

module.exports = html;
