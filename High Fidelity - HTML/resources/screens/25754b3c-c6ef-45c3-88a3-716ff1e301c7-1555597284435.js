jQuery("#simulation")
  .on("click", ".s-25754b3c-c6ef-45c3-88a3-716ff1e301c7 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4f999b12-881c-4944-9350-d8c3d5b83525"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/61bdb707-e0be-4aa2-9900-bbabac807282"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-25754b3c-c6ef-45c3-88a3-716ff1e301c7 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-25754b3c-c6ef-45c3-88a3-716ff1e301c7 #s-Input_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#0088CC",
                        "border-right-color": "#0088CC",
                        "border-bottom-color": "#0088CC",
                        "border-left-color": "#0088CC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-25754b3c-c6ef-45c3-88a3-716ff1e301c7 #s-Input_2 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#0088CC",
                        "border-right-color": "#0088CC",
                        "border-bottom-color": "#0088CC",
                        "border-left-color": "#0088CC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-25754b3c-c6ef-45c3-88a3-716ff1e301c7 #s-Input_3 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#0088CC",
                        "border-right-color": "#0088CC",
                        "border-bottom-color": "#0088CC",
                        "border-left-color": "#0088CC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-25754b3c-c6ef-45c3-88a3-716ff1e301c7 #s-Input_4 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#0088CC",
                        "border-right-color": "#0088CC",
                        "border-bottom-color": "#0088CC",
                        "border-left-color": "#0088CC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-25754b3c-c6ef-45c3-88a3-716ff1e301c7 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-25754b3c-c6ef-45c3-88a3-716ff1e301c7 #s-Input_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-25754b3c-c6ef-45c3-88a3-716ff1e301c7 #s-Input_2 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-25754b3c-c6ef-45c3-88a3-716ff1e301c7 #s-Input_3 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-25754b3c-c6ef-45c3-88a3-716ff1e301c7 #s-Input_4 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });