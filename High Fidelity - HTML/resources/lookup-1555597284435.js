(function(window, undefined) {
  var dictionary = {
    "61bdb707-e0be-4aa2-9900-bbabac807282": "Screen 5",
    "25754b3c-c6ef-45c3-88a3-716ff1e301c7": "Screen 4",
    "6bcc118d-9113-4e0b-9f65-e57e4b6f2c6a": "Added_member",
    "4f999b12-881c-4944-9350-d8c3d5b83525": "Screen 3",
    "4129d1f9-3c13-4d28-a4aa-8bc083f7389c": "add_new_member",
    "2c2ad232-dd79-4956-9c80-bb1e87917235": "Screen 2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "1d8595fa-9d4d-4c97-b4e3-db4edb931fda": "Disease_Entry",
    "f262ade5-7a7a-47a2-8f7e-bb86db3e8e5f": "Disease_Entry_edit",
    "ed563371-52b4-4f97-acf4-443bb6d11a17": "Mike_page",
    "495ce63a-d8fb-4a1a-b275-842a3eab0006": "Disease_Entry_added",
    "5f41e391-6fb0-4b95-bd58-fda41586bd49": "Disease_Entry_expanded",
    "e6ce9586-0ade-4982-9619-09864dc5b398": "Screen 1 imported",
    "0bd5a53c-0e7b-4981-9e9b-41540758e2dd": "show_info",
    "93c71c8b-9d53-4e0d-9298-70e23d41c5f8": "First-Screen",
    "f6e89a11-e157-43ab-894d-82c53fb761ac": "960 grid - 16 columns imported",
    "130d8435-e028-40ef-94a8-de14d2edc129": "960 grid - 16 columns imported_1",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "445c09a4-b0ae-47ac-9245-2dea57dadb17": "Template 1 imported",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "73e43072-e91f-44a9-bbb9-4c2c4cb8da4d": "960 grid - 12 columns imported_1",
    "a37296cc-8394-4f85-a6b9-141491d41f9f": "960 grid - 12 columns imported",
    "0f3e51ca-8387-4072-b164-700d03f68765": "default imported_1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default",
    "549667a4-bc14-4791-a7f1-d3286d85006c": "default imported"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);