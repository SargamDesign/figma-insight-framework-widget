(() => {
  // widget-src/code.tsx
  var { widget } = figma;
  var { AutoLayout, Ellipse, Frame, Image, Input, Rectangle, SVG, Text, useSyncedState, usePropertyMenu, useEffect } = widget;
  function InsightFramework() {
    const [whytext, setWhytext] = useSyncedState("whytext", "");
    const [stoptext, setStoptext] = useSyncedState("stoptext", "");
    const [findingstext, setFindingstext] = useSyncedState("findingstext", "");
    const [successtext, setSuccesstext] = useSyncedState("successtext", "");
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "InsightFramework",
      effect: {
        type: "drop-shadow",
        color: "#2C2B2A1A",
        offset: {
          x: 0,
          y: 2
        },
        blur: 4
      },
      fill: "#FFF",
      overflow: "visible",
      direction: "vertical",
      spacing: 24,
      padding: {
        vertical: 64,
        horizontal: 48
      },
      width: 595
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "T",
      overflow: "visible",
      direction: "vertical",
      spacing: 8,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Title",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Insight Framework",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 64,
      fontFamily: "Inter",
      fontSize: 58,
      letterSpacing: -1.2,
      fontWeight: 700
    }, "Insight Framework"))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "1",
      overflow: "visible",
      direction: "vertical",
      spacing: 8,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Q",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Why do we need to solve this problem?",
      fill: "#2C2B2A",
      width: "fill-parent",
      lineHeight: 30,
      fontFamily: "Inter",
      fontSize: 22,
      fontWeight: 700
    }, "Why do we need to solve this problem?")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "A",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Input, {
      value: whytext,
      placeholder: "Add your answer here ...",
      onTextEditEnd: (e) => {
        setWhytext(e.characters);
      },
      placeholderProps: {
        opacity: 0.4,
        fontWeight: 400
      },
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside",
      inputFrameProps: {},
      inputBehavior: "wrap"
    }))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "2",
      overflow: "visible",
      direction: "vertical",
      spacing: 8,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Q",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "What is stopping this from happening?",
      fill: "#2C2B2A",
      width: "fill-parent",
      lineHeight: 30,
      fontFamily: "Inter",
      fontSize: 22,
      fontWeight: 700
    }, "What is stopping this from happening?")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "A",
      overflow: "visible",
      direction: "vertical",
      spacing: 12,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Desc",
      overflow: "visible",
      direction: "vertical",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Input, {
      value: stoptext,
      placeholder: "Add your answer here ...",
      onTextEditEnd: (e) => {
        setStoptext(e.characters);
      },
      placeholderProps: {
        opacity: 0.4,
        fontWeight: 400
      },
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside",
      inputFrameProps: {},
      inputBehavior: "wrap"
    })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List",
      overflow: "visible",
      direction: "vertical",
      spacing: 4,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Autem quibusdam et aut officiis.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Autem quibusdam et aut officiis.")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Harum quidem rerum facilis est et expedita.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Harum quidem rerum facilis est et expedita.")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Itaque earum rerum hic tenetur a sapiente delectus.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Itaque earum rerum hic tenetur a sapiente delectus.")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Sed quia non numquam eius modi tempora incidunt.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Sed quia non numquam eius modi tempora incidunt."))))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "3",
      overflow: "visible",
      direction: "vertical",
      spacing: 8,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Q",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "What are the key findings from current processes?",
      fill: "#2C2B2A",
      width: "fill-parent",
      lineHeight: 30,
      fontFamily: "Inter",
      fontSize: 22,
      fontWeight: 700
    }, "What are the key findings from current processes?")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "A",
      overflow: "visible",
      direction: "vertical",
      spacing: 12,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Desc",
      overflow: "visible",
      direction: "vertical",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Input, {
      value: findingstext,
      placeholder: "Add your answer here ...",
      onTextEditEnd: (e) => {
        setFindingstext(e.characters);
      },
      placeholderProps: {
        opacity: 0.4,
        fontWeight: 400
      },
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside",
      inputFrameProps: {},
      inputBehavior: "wrap"
    })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List",
      overflow: "visible",
      direction: "vertical",
      spacing: 4,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Autem quibusdam et aut officiis.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Autem quibusdam et aut officiis.")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Harum quidem rerum facilis est et expedita.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Harum quidem rerum facilis est et expedita.")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Itaque earum rerum hic tenetur a sapiente delectus.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Itaque earum rerum hic tenetur a sapiente delectus.")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Sed quia non numquam eius modi tempora incidunt.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Sed quia non numquam eius modi tempora incidunt."))))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "4",
      overflow: "visible",
      direction: "vertical",
      spacing: 8,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Q",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "What evidence validates the problem?",
      fill: "#2C2B2A",
      width: "fill-parent",
      lineHeight: 30,
      fontFamily: "Inter",
      fontSize: 22,
      fontWeight: 700
    }, "What evidence validates the problem?")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "A",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List",
      overflow: "visible",
      direction: "vertical",
      spacing: 4,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Customer support? [Y/N]",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "Customer support? [Y/N]")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Data? [Y/N]",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "Data? [Y/N]")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "User research? [Y/N]",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "User research? [Y/N]")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Social media? [Y/N]",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "Social media? [Y/N]"))))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "5",
      overflow: "visible",
      direction: "vertical",
      spacing: 8,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Q",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "What are the user needs & wants?",
      fill: "#2C2B2A",
      width: "fill-parent",
      lineHeight: 30,
      fontFamily: "Inter",
      fontSize: 22,
      fontWeight: 700
    }, "What are the user needs and wants?")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "A",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List",
      overflow: "visible",
      direction: "vertical",
      spacing: 4,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Autem quibusdam et aut officiis.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Autem quibusdam et aut officiis.")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Harum quidem rerum facilis est et expedita.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Harum quidem rerum facilis est et expedita.")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Itaque earum rerum hic tenetur a sapiente delectus.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Itaque earum rerum hic tenetur a sapiente delectus.")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Sed quia non numquam eius modi tempora incidunt.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Sed quia non numquam eius modi tempora incidunt."))))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "6",
      overflow: "visible",
      direction: "vertical",
      spacing: 8,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Q",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "What are the user stories/JTBDs we will be focusing on in phase/milestone 1?",
      fill: "#2C2B2A",
      width: "fill-parent",
      lineHeight: 30,
      fontFamily: "Inter",
      fontSize: 22,
      fontWeight: 700
    }, "What are the user stories/JTBDs we will be focusing on in phase/milestone 1?")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "A",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List",
      overflow: "visible",
      direction: "vertical",
      spacing: 4,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "As a [persona], I [want to], [so that].",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 As a [persona], I [want to], [so that].")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."))))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "7",
      overflow: "visible",
      direction: "vertical",
      spacing: 8,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Q",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "What are the potential rabbit holes or dependencies we have calculated?",
      fill: "#2C2B2A",
      width: "fill-parent",
      lineHeight: 30,
      fontFamily: "Inter",
      fontSize: 22,
      fontWeight: 700
    }, "What are the potential rabbit holes or dependencies we have calculated?")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "A",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List",
      overflow: "visible",
      direction: "vertical",
      spacing: 4,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Autem quibusdam et aut officiis.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Autem quibusdam et aut officiis.")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Harum quidem rerum facilis est et expedita.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Harum quidem rerum facilis est et expedita.")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Itaque earum rerum hic tenetur a sapiente delectus.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Itaque earum rerum hic tenetur a sapiente delectus.")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "List Item",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Sed quia non numquam eius modi tempora incidunt.",
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "\u2022 Sed quia non numquam eius modi tempora incidunt."))))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "8",
      overflow: "visible",
      direction: "vertical",
      spacing: 8,
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Q",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "What would success metrics look like?",
      fill: "#2C2B2A",
      width: "fill-parent",
      lineHeight: 30,
      fontFamily: "Inter",
      fontSize: 22,
      fontWeight: 700
    }, "What would success metrics look like?")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "A",
      overflow: "visible",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Input, {
      value: successtext,
      placeholder: "Add your answer here ...",
      onTextEditEnd: (e) => {
        setSuccesstext(e.characters);
      },
      placeholderProps: {
        opacity: 0.4,
        fontWeight: 400
      },
      fill: "#2C2B2A",
      width: "fill-parent",
      paragraphSpacing: 9,
      lineHeight: 25,
      fontFamily: "Inter",
      fontSize: 15,
      strokeWidth: 0,
      strokeAlign: "inside",
      inputFrameProps: {},
      inputBehavior: "wrap"
    }))));
  }
  widget.register(InsightFramework);
})();
