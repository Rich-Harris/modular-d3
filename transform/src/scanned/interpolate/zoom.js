{
  "filepath": "/interpolate/zoom.js",
  "shared": [],
  "dependencies": [
    "d3_cosh",
    "d3_tanh",
    "d3_sinh"
  ],
  "helpers": [],
  "exports": [
    "d3.interpolateZoom"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "ρ"
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "Math"
              },
              "property": {
                "type": "Identifier",
                "name": "SQRT2"
              }
            }
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "ρ2"
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2"
            }
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "ρ4"
            },
            "init": {
              "type": "Literal",
              "value": 4,
              "raw": "4"
            }
          }
        ]
      },
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3"
            },
            "property": {
              "type": "Identifier",
              "name": "interpolateZoom"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "p0"
              },
              {
                "type": "Identifier",
                "name": "p1"
              }
            ],
            "defaults": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "ux0"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "p0"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "uy0"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "p0"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "w0"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "p0"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "ux1"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "p1"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "uy1"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "p1"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "w1"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "p1"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "dx"
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "ux1"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "ux0"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "dy"
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "uy1"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "uy0"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "d2"
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "dx"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "dx"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "dy"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "dy"
                          }
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "d1"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "Math"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "sqrt"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "d2"
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "b0"
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Identifier",
                                "name": "w1"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "w1"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Identifier",
                                "name": "w0"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "w0"
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "ρ4"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d2"
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "w0"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "ρ2"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "d1"
                          }
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "b1"
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Identifier",
                                "name": "w1"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "w1"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Identifier",
                                "name": "w0"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "w0"
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "ρ4"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d2"
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "w1"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "ρ2"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "d1"
                          }
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "r0"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "Math"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "log"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "Math"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "sqrt"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "b0"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "b0"
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "b0"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "r1"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "Math"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "log"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "Math"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "sqrt"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "b1"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "b1"
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "b1"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "dr"
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "r1"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "r0"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "S"
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "Identifier",
                            "name": "dr"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "Math"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "log"
                              }
                            },
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "operator": "/",
                                "left": {
                                  "type": "Identifier",
                                  "name": "w1"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "w0"
                                }
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "ρ"
                        }
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "interpolate"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "t"
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "s"
                            },
                            "init": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Identifier",
                                "name": "t"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "S"
                              }
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "dr"
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "coshr0"
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "d3_cosh"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "r0"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "u"
                                  },
                                  "init": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "w0"
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "ρ2"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "d1"
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "-",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "coshr0"
                                        },
                                        "right": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "d3_tanh"
                                          },
                                          "arguments": [
                                            {
                                              "type": "BinaryExpression",
                                              "operator": "+",
                                              "left": {
                                                "type": "BinaryExpression",
                                                "operator": "*",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "ρ"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "s"
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "r0"
                                              }
                                            }
                                          ]
                                        }
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "d3_sinh"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "r0"
                                          }
                                        ]
                                      }
                                    }
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "ux0"
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "u"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "dx"
                                      }
                                    }
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "uy0"
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "u"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "dy"
                                      }
                                    }
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "w0"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "coshr0"
                                      }
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "d3_cosh"
                                      },
                                      "arguments": [
                                        {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "ρ"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "s"
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "r0"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "alternate": null
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "ux0"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "t"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "dx"
                                }
                              }
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "uy0"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "t"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "dy"
                                }
                              }
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Identifier",
                                "name": "w0"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Math"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "exp"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "ρ"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "s"
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "interpolate"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "duration"
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "name": "S"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1000,
                        "raw": "1000"
                      }
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "interpolate"
                  }
                }
              ]
            },
            "rest": null,
            "generator": false,
            "expression": false
          }
        }
      }
    ]
  }
}