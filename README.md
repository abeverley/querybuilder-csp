# querybuilder-csp

Files and instructions to enable [jq-querybuilder](https://github.com/mistic100/jQuery-QueryBuilder/) to be used with a CSP policy (see https://github.com/mistic100/jQuery-QueryBuilder/issues/728).

## Usage

To use this code out of the box with an existing QueryBuilder installation:

1. Include JQQB (not standalone, to exclude doT):

```
<script src="/js/jquery-extendext.js"></script>
<script src="/js/query-builder.min.js"></script>
```

2. Include Handlebars runtime:
```
<script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.runtime.js"></script>
```

3. Include Handlebars compiled templates for JQQB (in this distro):
```
<script src="/js/jqqb-templates.js"></script>
```

4. Configure JQQB to use Handlebars templates instead of its own.

- First, the required Handlebars helper functions:


```
    var hbtemplate = Handlebars.templates;

    $builder.on('afterInit.queryBuilder', function(e, rule, error, value) {
        Handlebars.registerHelper("jq_translate", function(text, text2) {
            if (text == 'conditions' || text == 'operators') {
                return e.builder.translate(text, text2);
            } else if (text == 'optgroup') {
                return e.builder.translate(e.builder.settings.optgroups[text2]);
            } else {
                return e.builder.translate(text);
            }
        });
        Handlebars.registerHelper("show_add_group", function(settings, level) {
            return (settings.allow_groups === -1 || settings.allow_groups >= level);
        });
        Handlebars.registerHelper("show_delete_group", function(level) {
            return (level > 1 );
        });
        Handlebars.registerHelper("single_operator", function(operators) {
            return (operators.length === 1);
        });
        Handlebars.registerHelper("optgroup_different", function(optgroup, options) {
            return (optgroup !== options.data.root["optgroup"]);
        });
        Handlebars.registerHelper("get_filter_property", function(rule, property) {
            /* Workaround inability to access prototype methods in
             * Handlebars, which results in the error 'Access has been
             * denied to resolve the property "filter" because it is not an
             * "own property" of its parent'. Handlebars has options to
             * whitelist specific prototype functions, but it doesn't seem
             * to be possible to include this options when precompiling
             * templates */
            return rule.filter[property];
        });
        Handlebars.registerHelper("optgroup_set", function(optgroup, options) {
            if (!options.data.root) {
                options.data.root = {};
            }
            options.data.root["optgroup"] = optgroup;
            return ''; // Don't print anything in template
        });
    });
```

- Then, the required JQQB configuration:

```
    $builder.queryBuilder({
        ...
        templates: {
            rule: hbtemplate.rule,
            group: hbtemplate.group,
            filterSelect: hbtemplate.filterSelect,
            operatorSelect: hbtemplate.operatorSelect,
            ruleValueSelect: hbtemplate.ruleValueSelect,
        }
    });

```

## Changing templates

The templates as-given should provide a drop-in replacement to JQQB's standard
templates. However, should you wish to update them, first install Handlebars:

```
npm install -g handlebars
```

And then update the relevant ```.handlebars``` template file and then recompile:

```
handlebars group.handlebars rule.handlebars filterSelect.handlebars operatorSelect.handlebars ruleValueSelect.handlebars -f jqqb-templates.js
```
