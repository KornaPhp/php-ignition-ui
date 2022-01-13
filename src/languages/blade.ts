export default function blade(hljs: any) {
    return {
        name: 'Blade',
        case_insensitive: true,
        subLanguage: 'php-template',
        contains: [
            hljs.COMMENT(/\{\{--/, /--\}\}/),

            // output with HTML escaping {{ $likeThis }}
            {
                className: 'template-variable',
                begin: /\{\{/,
                starts: {
                    end: /\}\}/,
                    returnEnd: true,
                    subLanguage: 'php',
                },
            },
            {
                className: 'template-variable',
                begin: /\}\}/,
            },

            // output with HTML escaping {{{ $likeThis }}}
            {
                className: 'template-variable',
                begin: /\{\{\{/,
                starts: {
                    end: /\}\}\}/,
                    returnEnd: true,
                    subLanguage: 'php',
                },
            },
            {
                className: 'template-variable',
                begin: /\}\}\}/,
            },

            // output with no HTML escaping
            {
                className: 'template-variable',
                begin: /\{!!/,
                starts: {
                    end: /!!\}/,
                    returnEnd: true,
                    subLanguage: 'php',
                },
            },
            {
                className: 'template-variable',
                begin: /!!\}/,
            },

            // directly inserted PHP code
            {
                className: 'template-tag',
                begin: /@php/,
                starts: {
                    end: /@endphp/,
                    returnEnd: true,
                    subLanguage: 'php',
                },
                relevance: 10,
            },

            // directives
            {
                begin: /@[\w]+/,
                end: /[\W]/,
                excludeEnd: true,
                className: 'template-tag',
            },
        ],
    };
}
