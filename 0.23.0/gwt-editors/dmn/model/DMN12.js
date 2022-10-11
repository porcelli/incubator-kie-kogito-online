var DMN12_Module_Factory=function(){return{DMN12:{name:"DMN12",defaultElementNamespaceURI:"http://www.omg.org/spec/DMN/20180521/MODEL/",dependencies:["DMNDI12"],typeInfos:[{localName:"TDecisionRule",typeName:"tDecisionRule",baseTypeInfo:".TDMNElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"inputEntry",minOccurs:0,collection:!0,typeInfo:".TUnaryTests"},{name:"outputEntry",required:!0,collection:!0,typeInfo:".TLiteralExpression"},{name:"annotationEntry",minOccurs:0,collection:!0,typeInfo:".TRuleAnnotation"}]},{localName:"TImport",typeName:"tImport",baseTypeInfo:".TNamedElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"namespace",required:!0,attributeName:{localPart:"namespace"},type:"attribute"},{name:"locationURI",attributeName:{localPart:"locationURI"},type:"attribute"},{name:"importType",required:!0,attributeName:{localPart:"importType"},type:"attribute"}]},{localName:"TElementCollection",typeName:"tElementCollection",baseTypeInfo:".TNamedElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"drgElement",minOccurs:0,collection:!0,typeInfo:".TDMNElementReference"}]},{localName:"TItemDefinition",typeName:"tItemDefinition",baseTypeInfo:".TNamedElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"typeRef",required:!0},{name:"allowedValues",typeInfo:".TUnaryTests"},{name:"itemComponent",minOccurs:0,collection:!0,typeInfo:".TItemDefinition"},{name:"typeLanguage",attributeName:{localPart:"typeLanguage"},type:"attribute"},{name:"isCollection",typeInfo:"Boolean",attributeName:{localPart:"isCollection"},type:"attribute"}]},{localName:"TRuleAnnotation",typeName:"tRuleAnnotation",propertyInfos:[{name:"text"}]},{localName:"TBusinessContextElement",typeName:"tBusinessContextElement",baseTypeInfo:".TNamedElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"uri",attributeName:{localPart:"URI"},type:"attribute"}]},{localName:"TInformationRequirement",typeName:"tInformationRequirement",baseTypeInfo:".TDMNElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"requiredDecision",required:!0,typeInfo:".TDMNElementReference"},{name:"requiredInput",required:!0,typeInfo:".TDMNElementReference"}]},{localName:"TDecisionTable",typeName:"tDecisionTable",baseTypeInfo:".TExpression",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"input",minOccurs:0,collection:!0,typeInfo:".TInputClause"},{name:"output",required:!0,collection:!0,typeInfo:".TOutputClause"},{name:"annotation",minOccurs:0,collection:!0,typeInfo:".TRuleAnnotationClause"},{name:"rule",minOccurs:0,collection:!0,typeInfo:".TDecisionRule"},{name:"hitPolicy",typeInfo:".THitPolicy",attributeName:{localPart:"hitPolicy"},type:"attribute"},{name:"aggregation",typeInfo:".TBuiltinAggregator",attributeName:{localPart:"aggregation"},type:"attribute"},{name:"preferredOrientation",typeInfo:".TDecisionTableOrientation",attributeName:{localPart:"preferredOrientation"},type:"attribute"},{name:"outputLabel",attributeName:{localPart:"outputLabel"},type:"attribute"}]},{localName:"TBinding",typeName:"tBinding",propertyInfos:[{name:"parameter",required:!0,typeInfo:".TInformationItem"},{name:"expression",mixed:!1,allowDom:!1,typeInfo:".TExpression",type:"elementRef"}]},{localName:"TKnowledgeRequirement",typeName:"tKnowledgeRequirement",baseTypeInfo:".TDMNElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"requiredKnowledge",required:!0,typeInfo:".TDMNElementReference"}]},{localName:"TUnaryTests",typeName:"tUnaryTests",baseTypeInfo:".TDMNElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"text",required:!0},{name:"expressionLanguage",attributeName:{localPart:"expressionLanguage"},type:"attribute"}]},{localName:"TArtifact",typeName:"tArtifact",baseTypeInfo:".TDMNElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"}]},{localName:"TDRGElement",typeName:"tDRGElement",baseTypeInfo:".TNamedElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"}]},{localName:"TRuleAnnotationClause",typeName:"tRuleAnnotationClause",propertyInfos:[{name:"name",attributeName:{localPart:"name"},type:"attribute"}]},{localName:"TOrganizationUnit",typeName:"tOrganizationUnit",baseTypeInfo:".TBusinessContextElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"decisionMade",minOccurs:0,collection:!0,typeInfo:".TDMNElementReference"},{name:"decisionOwned",minOccurs:0,collection:!0,typeInfo:".TDMNElementReference"}]},{localName:"TAuthorityRequirement",typeName:"tAuthorityRequirement",baseTypeInfo:".TDMNElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"requiredDecision",required:!0,typeInfo:".TDMNElementReference"},{name:"requiredInput",required:!0,typeInfo:".TDMNElementReference"},{name:"requiredAuthority",required:!0,typeInfo:".TDMNElementReference"}]},{localName:"TExpression",typeName:"tExpression",baseTypeInfo:".TDMNElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"typeRef",attributeName:{localPart:"typeRef"},type:"attribute"}]},{localName:"TImportedValues",typeName:"tImportedValues",baseTypeInfo:".TImport",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"importedElement",required:!0},{name:"expressionLanguage",attributeName:{localPart:"expressionLanguage"},type:"attribute"}]},{localName:"TInputClause",typeName:"tInputClause",baseTypeInfo:".TDMNElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"inputExpression",required:!0,typeInfo:".TLiteralExpression"},{name:"inputValues",typeInfo:".TUnaryTests"}]},{localName:"TInvocation",typeName:"tInvocation",baseTypeInfo:".TExpression",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"expression",mixed:!1,allowDom:!1,typeInfo:".TExpression",type:"elementRef"},{name:"binding",minOccurs:0,collection:!0,typeInfo:".TBinding"}]},{localName:"TList",typeName:"tList",baseTypeInfo:".TExpression",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"expression",minOccurs:0,collection:!0,mixed:!1,allowDom:!1,typeInfo:".TExpression",type:"elementRef"}]},{localName:"TBusinessKnowledgeModel",typeName:"tBusinessKnowledgeModel",baseTypeInfo:".TInvocable",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"encapsulatedLogic",typeInfo:".TFunctionDefinition"},{name:"knowledgeRequirement",minOccurs:0,collection:!0,typeInfo:".TKnowledgeRequirement"},{name:"authorityRequirement",minOccurs:0,collection:!0,typeInfo:".TAuthorityRequirement"}]},{localName:"TOutputClause",typeName:"tOutputClause",baseTypeInfo:".TDMNElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"outputValues",typeInfo:".TUnaryTests"},{name:"defaultOutputEntry",typeInfo:".TLiteralExpression"},{name:"name",attributeName:{localPart:"name"},type:"attribute"},{name:"typeRef",attributeName:{localPart:"typeRef"},type:"attribute"}]},{localName:"TPerformanceIndicator",typeName:"tPerformanceIndicator",baseTypeInfo:".TBusinessContextElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"impactingDecision",minOccurs:0,collection:!0,typeInfo:".TDMNElementReference"}]},{localName:"TContext",typeName:"tContext",baseTypeInfo:".TExpression",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"contextEntry",minOccurs:0,collection:!0,typeInfo:".TContextEntry"}]},{localName:"TInformationItem",typeName:"tInformationItem",baseTypeInfo:".TNamedElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"typeRef",attributeName:{localPart:"typeRef"},type:"attribute"}]},{localName:"TInputData",typeName:"tInputData",baseTypeInfo:".TDRGElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"variable",typeInfo:".TInformationItem"}]},{localName:"TNamedElement",typeName:"tNamedElement",baseTypeInfo:".TDMNElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"name",required:!0,attributeName:{localPart:"name"},type:"attribute"}]},{localName:"TDecision",typeName:"tDecision",baseTypeInfo:".TDRGElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"question"},{name:"allowedAnswers"},{name:"variable",typeInfo:".TInformationItem"},{name:"informationRequirement",minOccurs:0,collection:!0,typeInfo:".TInformationRequirement"},{name:"knowledgeRequirement",minOccurs:0,collection:!0,typeInfo:".TKnowledgeRequirement"},{name:"authorityRequirement",minOccurs:0,collection:!0,typeInfo:".TAuthorityRequirement"},{name:"supportedObjective",minOccurs:0,collection:!0,typeInfo:".TDMNElementReference"},{name:"impactedPerformanceIndicator",minOccurs:0,collection:!0,typeInfo:".TDMNElementReference"},{name:"decisionMaker",minOccurs:0,collection:!0,typeInfo:".TDMNElementReference"},{name:"decisionOwner",minOccurs:0,collection:!0,typeInfo:".TDMNElementReference"},{name:"usingProcess",minOccurs:0,collection:!0,typeInfo:".TDMNElementReference"},{name:"usingTask",minOccurs:0,collection:!0,typeInfo:".TDMNElementReference"},{name:"expression",mixed:!1,allowDom:!1,typeInfo:".TExpression",type:"elementRef"}]},{localName:"TDMNElement",typeName:"tDMNElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"description"},{name:"extensionElements",typeInfo:".TDMNElement.ExtensionElements"},{name:"id",typeInfo:"ID",attributeName:{localPart:"id"},type:"attribute"},{name:"label",attributeName:{localPart:"label"},type:"attribute"}]},{localName:"TDMNElementReference",typeName:"tDMNElementReference",propertyInfos:[{name:"href",required:!0,attributeName:{localPart:"href"},type:"attribute"}]},{localName:"TDecisionService",typeName:"tDecisionService",baseTypeInfo:".TInvocable",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"outputDecision",minOccurs:0,collection:!0,typeInfo:".TDMNElementReference"},{name:"encapsulatedDecision",minOccurs:0,collection:!0,typeInfo:".TDMNElementReference"},{name:"inputDecision",minOccurs:0,collection:!0,typeInfo:".TDMNElementReference"},{name:"inputData",minOccurs:0,collection:!0,typeInfo:".TDMNElementReference"}]},{localName:"TTextAnnotation",typeName:"tTextAnnotation",baseTypeInfo:".TArtifact",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"text"},{name:"textFormat",attributeName:{localPart:"textFormat"},type:"attribute"}]},{localName:"TDMNElement.ExtensionElements",typeName:null,propertyInfos:[{name:"any",minOccurs:0,collection:!0,mixed:!1,type:"anyElement"}]},{localName:"TKnowledgeSource",typeName:"tKnowledgeSource",baseTypeInfo:".TDRGElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"authorityRequirement",minOccurs:0,collection:!0,typeInfo:".TAuthorityRequirement"},{name:"type"},{name:"owner",typeInfo:".TDMNElementReference"},{name:"locationURI",attributeName:{localPart:"locationURI"},type:"attribute"}]},{localName:"TRelation",typeName:"tRelation",baseTypeInfo:".TExpression",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"column",minOccurs:0,collection:!0,typeInfo:".TInformationItem"},{name:"row",minOccurs:0,collection:!0,typeInfo:".TList"}]},{localName:"TLiteralExpression",typeName:"tLiteralExpression",baseTypeInfo:".TExpression",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"text",required:!0},{name:"importedValues",required:!0,typeInfo:".TImportedValues"},{name:"expressionLanguage",attributeName:{localPart:"expressionLanguage"},type:"attribute"}]},{localName:"TInvocable",typeName:"tInvocable",baseTypeInfo:".TDRGElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"variable",typeInfo:".TInformationItem"}]},{localName:"TDefinitions",typeName:"tDefinitions",baseTypeInfo:".TNamedElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"_import",minOccurs:0,collection:!0,elementName:"import",typeInfo:".TImport"},{name:"itemDefinition",minOccurs:0,collection:!0,typeInfo:".TItemDefinition"},{name:"drgElement",minOccurs:0,collection:!0,mixed:!1,allowDom:!1,typeInfo:".TDRGElement",type:"elementRef"},{name:"artifact",minOccurs:0,collection:!0,mixed:!1,allowDom:!1,typeInfo:".TArtifact",type:"elementRef"},{name:"elementCollection",minOccurs:0,collection:!0,typeInfo:".TElementCollection"},{name:"businessContextElement",minOccurs:0,collection:!0,mixed:!1,allowDom:!1,typeInfo:".TBusinessContextElement",type:"elementRef"},{name:"dmndi",elementName:{localPart:"DMNDI",namespaceURI:"http://www.omg.org/spec/DMN/20180521/DMNDI/"},typeInfo:"DMNDI12.DMNDI"},{name:"expressionLanguage",attributeName:{localPart:"expressionLanguage"},type:"attribute"},{name:"typeLanguage",attributeName:{localPart:"typeLanguage"},type:"attribute"},{name:"namespace",required:!0,attributeName:{localPart:"namespace"},type:"attribute"},{name:"exporter",attributeName:{localPart:"exporter"},type:"attribute"},{name:"exporterVersion",attributeName:{localPart:"exporterVersion"},type:"attribute"}]},{localName:"TContextEntry",typeName:"tContextEntry",baseTypeInfo:".TDMNElement",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"variable",typeInfo:".TInformationItem"},{name:"expression",required:!0,mixed:!1,allowDom:!1,typeInfo:".TExpression",type:"elementRef"}]},{localName:"TAssociation",typeName:"tAssociation",baseTypeInfo:".TArtifact",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"sourceRef",required:!0,typeInfo:".TDMNElementReference"},{name:"targetRef",required:!0,typeInfo:".TDMNElementReference"},{name:"associationDirection",typeInfo:".TAssociationDirection",attributeName:{localPart:"associationDirection"},type:"attribute"}]},{localName:"TFunctionDefinition",typeName:"tFunctionDefinition",baseTypeInfo:".TExpression",propertyInfos:[{name:"otherAttributes",type:"anyAttribute"},{name:"formalParameter",minOccurs:0,collection:!0,typeInfo:".TInformationItem"},{name:"expression",mixed:!1,allowDom:!1,typeInfo:".TExpression",type:"elementRef"},{name:"kind",typeInfo:".TFunctionKind",attributeName:{localPart:"kind"},type:"attribute"}]},{type:"enumInfo",localName:"THitPolicy",values:["UNIQUE","FIRST","PRIORITY","ANY","COLLECT","RULE ORDER","OUTPUT ORDER"]},{type:"enumInfo",localName:"TBuiltinAggregator",values:["SUM","COUNT","MIN","MAX"]},{type:"enumInfo",localName:"TDecisionTableOrientation",values:["Rule-as-Row","Rule-as-Column","CrossTable"]},{type:"enumInfo",localName:"TAssociationDirection",values:["None","One","Both"]},{type:"enumInfo",localName:"TFunctionKind",values:["FEEL","Java","PMML"]}],elementInfos:[{typeInfo:".TArtifact",elementName:"artifact",substitutionHead:"DMNElement"},{typeInfo:".TInvocable",elementName:"invocable",substitutionHead:"drgElement"},{typeInfo:".TKnowledgeRequirement",elementName:"knowledgeRequirement",substitutionHead:"DMNElement"},{typeInfo:".TTextAnnotation",elementName:"textAnnotation",substitutionHead:"artifact"},{typeInfo:".TBusinessContextElement",elementName:"businessContextElement"},{typeInfo:".TInformationRequirement",elementName:"informationRequirement",substitutionHead:"DMNElement"},{typeInfo:".TLiteralExpression",elementName:"literalExpression",substitutionHead:"expression"},{typeInfo:".TDRGElement",elementName:"drgElement",substitutionHead:"namedElement"},{typeInfo:".TPerformanceIndicator",elementName:"performanceIndicator",substitutionHead:"businessContextElement"},{typeInfo:".TDMNElement",elementName:"DMNElement"},{typeInfo:".TBusinessKnowledgeModel",elementName:"businessKnowledgeModel",substitutionHead:"invocable"},{typeInfo:".TContextEntry",elementName:"contextEntry",substitutionHead:"DMNElement"},{typeInfo:".TKnowledgeSource",elementName:"knowledgeSource",substitutionHead:"drgElement"},{typeInfo:".TItemDefinition",elementName:"itemDefinition",substitutionHead:"namedElement"},{typeInfo:".TAuthorityRequirement",elementName:"authorityRequirement",substitutionHead:"DMNElement"},{typeInfo:".TContext",elementName:"context",substitutionHead:"expression"},{typeInfo:".TNamedElement",elementName:"namedElement",substitutionHead:"DMNElement"},{typeInfo:".TElementCollection",elementName:"elementCollection",substitutionHead:"namedElement"},{typeInfo:".TExpression",elementName:"expression"},{typeInfo:".TInputData",elementName:"inputData",substitutionHead:"drgElement"},{typeInfo:".TDecisionService",elementName:"decisionService",substitutionHead:"invocable"},{typeInfo:".TImport",elementName:"import",substitutionHead:"namedElement"},{typeInfo:".TDecisionTable",elementName:"decisionTable",substitutionHead:"expression"},{typeInfo:".TRelation",elementName:"relation",substitutionHead:"expression"},{typeInfo:".TDefinitions",elementName:"definitions",substitutionHead:"namedElement"},{typeInfo:".TInvocation",elementName:"invocation",substitutionHead:"expression"},{typeInfo:".TFunctionDefinition",elementName:"functionDefinition",substitutionHead:"expression"},{typeInfo:".TDecision",elementName:"decision",substitutionHead:"drgElement"},{typeInfo:".TAssociation",elementName:"association",substitutionHead:"artifact"},{typeInfo:".TOrganizationUnit",elementName:"organizationUnit",substitutionHead:"businessContextElement"},{typeInfo:".TInformationItem",elementName:"informationItem",substitutionHead:"namedElement"},{typeInfo:".TList",elementName:"list",substitutionHead:"expression"}]}}};if("function"==typeof define&&define.amd)define([],DMN12_Module_Factory);else{var DMN12_Module=DMN12_Module_Factory();if("undefined"!=typeof module&&module.exports)module.exports.DMN12=DMN12_Module.DMN12;else var DMN12=DMN12_Module.DMN12}