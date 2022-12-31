(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['group'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <button type=\"button\" class=\"btn btn-xs btn-success\" data-add=\"group\">\n          <i class=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"icons") : depth0)) != null ? lookupProperty(stack1,"add_group") : stack1), depth0))
    + "\"></i> "
    + alias1((lookupProperty(helpers,"jq_translate")||(depth0 && lookupProperty(depth0,"jq_translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"add_group",{"name":"jq_translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":48},"end":{"line":9,"column":78}}}))
    + "\n        </button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <button type=\"button\" class=\"btn btn-xs btn-danger\" data-delete=\"group\">\n          <i class=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"icons") : depth0)) != null ? lookupProperty(stack1,"remove_group") : stack1), depth0))
    + "\"></i> "
    + alias1((lookupProperty(helpers,"jq_translate")||(depth0 && lookupProperty(depth0,"jq_translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"delete_group",{"name":"jq_translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":51},"end":{"line":14,"column":84}}}))
    + "\n        </button>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <label class=\"btn btn-xs btn-primary\">\n          <input type=\"radio\" name=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"group_id") || (depth0 != null ? lookupProperty(depth0,"group_id") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"group_id","hash":{},"data":data,"loc":{"start":{"line":21,"column":36},"end":{"line":21,"column":50}}}) : helper)))
    + "_cond\" value=\""
    + alias3(container.lambda(depth0, depth0))
    + "\"> "
    + alias3((lookupProperty(helpers,"jq_translate")||(depth0 && lookupProperty(depth0,"jq_translate"))||alias2).call(alias1,"conditions",depth0,{"name":"jq_translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":77},"end":{"line":21,"column":113}}}))
    + "\n        </label>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"error-container\"><i class=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"icons") : depth0)) != null ? lookupProperty(stack1,"error") : stack1), depth0))
    + "\"></i></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"group_id") || (depth0 != null ? lookupProperty(depth0,"group_id") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"group_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":23}}}) : helper)))
    + "\" class=\"rules-group-container\">\n  <div class=\"rules-group-header\">\n    <div class=\"btn-group pull-right group-actions\">\n      <button type=\"button\" class=\"btn btn-xs btn-success\" data-add=\"rule\">\n        <i class=\""
    + alias3(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"icons") : depth0)) != null ? lookupProperty(stack1,"add_rule") : stack1), depth0))
    + "\"></i> "
    + alias3((lookupProperty(helpers,"jq_translate")||(depth0 && lookupProperty(depth0,"jq_translate"))||alias2).call(alias1,"add_rule",{"name":"jq_translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":45},"end":{"line":5,"column":74}}}))
    + "\n      </button>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"show_add_group")||(depth0 && lookupProperty(depth0,"show_add_group"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"settings") : depth0),(depth0 != null ? lookupProperty(depth0,"level") : depth0),{"name":"show_add_group","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":43}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":11,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"show_delete_group")||(depth0 && lookupProperty(depth0,"show_delete_group"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"level") : depth0),{"name":"show_delete_group","hash":{},"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":12,"column":37}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":16,"column":13}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"btn-group group-conditions\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"conditions") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":23,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"display_errors") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":4},"end":{"line":27,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n  <div class=rules-group-body>\n    <div class=rules-list></div>\n  </div>\n</div>";
},"useData":true});
templates['rule'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"error-container\"><i class=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"icons") : depth0)) != null ? lookupProperty(stack1,"error") : stack1), depth0))
    + "\"></i></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"rule_id") || (depth0 != null ? lookupProperty(depth0,"rule_id") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"rule_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":22}}}) : helper)))
    + "\" class=\"rule-container\">\n  <div class=\"rule-header\">\n    <div class=\"btn-group pull-right rule-actions\">\n      <button type=\"button\" class=\"btn btn-xs btn-danger\" data-delete=\"rule\">\n        <i class=\""
    + alias3(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"icons") : depth0)) != null ? lookupProperty(stack1,"remove_rule") : stack1), depth0))
    + "\"></i> "
    + alias3((lookupProperty(helpers,"jq_translate")||(depth0 && lookupProperty(depth0,"jq_translate"))||alias2).call(alias1,"delete_rule",{"name":"jq_translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":48},"end":{"line":5,"column":80}}}))
    + "\n      </button>\n    </div>\n  </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"display_errors") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":11,"column":9}}})) != null ? stack1 : "")
    + "  <div class=\"rule-filter-container\"></div>\n  <div class=\"rule-operator-container\"></div>\n  <div class=\"rule-value-container\"></div>\n</div>";
},"useData":true});
templates['filterSelect'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <option value=\"-1\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"select_placeholder") : stack1), depth0))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"optgroup_different")||(depth0 && lookupProperty(depth0,"optgroup_different"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"optgroup") : depth0),{"name":"optgroup_different","hash":{},"data":data,"loc":{"start":{"line":7,"column":10},"end":{"line":7,"column":44}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":13,"column":11}}})) != null ? stack1 : "")
    + "    <option value=\""
    + alias3(container.lambda((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":34},"end":{"line":14,"column":84}}})) != null ? stack1 : "")
    + ">"
    + alias3((lookupProperty(helpers,"jq_translate")||(depth0 && lookupProperty(depth0,"jq_translate"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"label") : depth0),{"name":"jq_translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":85},"end":{"line":14,"column":114}}}))
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"optgroup")),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":47}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"optgroup") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":12,"column":13}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "</optgroup>";
},"7":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <optgroup label=\""
    + alias3((lookupProperty(helpers,"jq_translate")||(depth0 && lookupProperty(depth0,"jq_translate"))||alias2).call(alias1,"optgroup",(depth0 != null ? lookupProperty(depth0,"optgroup") : depth0),{"name":"jq_translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":25},"end":{"line":10,"column":68}}}))
    + "\">\n        "
    + alias3((lookupProperty(helpers,"optgroup_set")||(depth0 && lookupProperty(depth0,"optgroup_set"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"optgroup") : depth0),{"name":"optgroup_set","hash":{},"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":11,"column":40}}}))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "data-icon=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"icon") : depth0), depth0))
    + "\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias2((lookupProperty(helpers,"optgroup_set")||(depth0 && lookupProperty(depth0,"optgroup_set"))||container.hooks.helperMissing).call(alias1,"",{"name":"optgroup_set","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":21}}}))
    + "\n<select class=\"form-control\" name=\""
    + alias2(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"rule") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "_filter\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"display_empty_filter") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"filters") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + "  "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"optgroup")),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":16,"column":43}}})) != null ? stack1 : "")
    + "\n</select>\n";
},"useData":true});
templates['operatorSelect'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"operators") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":6,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span>\n      "
    + container.escapeExpression((lookupProperty(helpers,"jq_translate")||(depth0 && lookupProperty(depth0,"jq_translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"operators",(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"jq_translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":46}}}))
    + "\n    </span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "hide";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"optgroup_different")||(depth0 && lookupProperty(depth0,"optgroup_different"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"optgroup") : depth0),{"name":"optgroup_different","hash":{},"data":data,"loc":{"start":{"line":11,"column":10},"end":{"line":11,"column":44}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":17,"column":11}}})) != null ? stack1 : "")
    + "    <option value=\""
    + alias3(container.lambda((depth0 != null ? lookupProperty(depth0,"type") : depth0), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":36},"end":{"line":18,"column":86}}})) != null ? stack1 : "")
    + ">"
    + alias3((lookupProperty(helpers,"jq_translate")||(depth0 && lookupProperty(depth0,"jq_translate"))||alias2).call(alias1,"operators",(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"jq_translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":87},"end":{"line":18,"column":127}}}))
    + "</option>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"optgroup")),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":47}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"optgroup") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":16,"column":13}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "</optgroup>";
},"10":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <optgroup label=\""
    + alias3((lookupProperty(helpers,"jq_translate")||(depth0 && lookupProperty(depth0,"jq_translate"))||alias2).call(alias1,"optgroup",(depth0 != null ? lookupProperty(depth0,"optgroup") : depth0),{"name":"jq_translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":25},"end":{"line":14,"column":68}}}))
    + "\">\n        "
    + alias3((lookupProperty(helpers,"optgroup_set")||(depth0 && lookupProperty(depth0,"optgroup_set"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"optgroup") : depth0),{"name":"optgroup_set","hash":{},"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":40}}}))
    + "\n";
},"12":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "data-icon=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"icon") : depth0), depth0))
    + "\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"single_operator")||(depth0 && lookupProperty(depth0,"single_operator"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"operators") : depth0),{"name":"single_operator","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":33}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + alias3((lookupProperty(helpers,"optgroup_set")||(depth0 && lookupProperty(depth0,"optgroup_set"))||alias2).call(alias1,"",{"name":"optgroup_set","hash":{},"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":8,"column":21}}}))
    + "\n<select class=\"form-control "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"single_operator")||(depth0 && lookupProperty(depth0,"single_operator"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"operators") : depth0),{"name":"single_operator","hash":{},"data":data,"loc":{"start":{"line":9,"column":34},"end":{"line":9,"column":61}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":28},"end":{"line":9,"column":75}}})) != null ? stack1 : "")
    + "\" name=\""
    + alias3(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"rule") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "_operator\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"operators") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "  "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"optgroup")),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":20,"column":43}}})) != null ? stack1 : "")
    + "\n</select>\n";
},"useData":true});
templates['ruleValueSelect'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "multiple";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <option value=\""
    + alias3((lookupProperty(helpers,"get_filter_property")||(depth0 && lookupProperty(depth0,"get_filter_property"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"rule") : depth0),"placeholder_value",{"name":"get_filter_property","hash":{},"data":data,"loc":{"start":{"line":4,"column":19},"end":{"line":4,"column":69}}}))
    + "\" disabled selected>"
    + alias3((lookupProperty(helpers,"get_filter_property")||(depth0 && lookupProperty(depth0,"get_filter_property"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"rule") : depth0),"placeholder",{"name":"get_filter_property","hash":{},"data":data,"loc":{"start":{"line":4,"column":89},"end":{"line":4,"column":133}}}))
    + "</option>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"optgroup_different")||(depth0 && lookupProperty(depth0,"optgroup_different"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"optgroup") : depth0),{"name":"optgroup_different","hash":{},"data":data,"loc":{"start":{"line":7,"column":10},"end":{"line":7,"column":44}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":13,"column":11}}})) != null ? stack1 : "")
    + "    <option value=\""
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"value") : depth0), depth0))
    + "\">"
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"label") : depth0), depth0))
    + "</option>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"optgroup")),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":47}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"optgroup") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":12,"column":13}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "</optgroup>";
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <optgroup label=\""
    + alias3((lookupProperty(helpers,"jq_translate")||(depth0 && lookupProperty(depth0,"jq_translate"))||alias2).call(alias1,"optgroup",(depth0 != null ? lookupProperty(depth0,"optgroup") : depth0),{"name":"jq_translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":25},"end":{"line":10,"column":68}}}))
    + "\">\n        "
    + alias3((lookupProperty(helpers,"optgroup_set")||(depth0 && lookupProperty(depth0,"optgroup_set"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"optgroup") : depth0),{"name":"optgroup_set","hash":{},"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":11,"column":40}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias3((lookupProperty(helpers,"optgroup_set")||(depth0 && lookupProperty(depth0,"optgroup_set"))||alias2).call(alias1,"",{"name":"optgroup_set","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":21}}}))
    + "\n<select class=\"form-control\" name=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":35},"end":{"line":2,"column":45}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"get_filter_property")||(depth0 && lookupProperty(depth0,"get_filter_property"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"rule") : depth0),"multiple",{"name":"get_filter_property","hash":{},"data":data,"loc":{"start":{"line":2,"column":53},"end":{"line":2,"column":90}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":47},"end":{"line":2,"column":108}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"get_filter_property")||(depth0 && lookupProperty(depth0,"get_filter_property"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"rule") : depth0),"placeholder",{"name":"get_filter_property","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":48}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(lookupProperty(helpers,"get_filter_property")||(depth0 && lookupProperty(depth0,"get_filter_property"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"rule") : depth0),"values",{"name":"get_filter_property","hash":{},"data":data,"loc":{"start":{"line":6,"column":10},"end":{"line":6,"column":45}}}),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + "  "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"optgroup")),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":16,"column":43}}})) != null ? stack1 : "")
    + "\n</select>\n";
},"useData":true});
})();