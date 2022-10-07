const { widget } = figma;
const { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text } = widget;

function InsightFramework() {
  return (
    <AutoLayout
      name="InsightFramework"
      fill="#FFF"
      overflow="visible"
      direction="vertical"
      spacing={24}
      padding={{
        vertical: 64,
        horizontal: 48,
      }}
      width={595}
    >
      <AutoLayout
        name="T"
        overflow="visible"
        direction="vertical"
        spacing={8}
        width="fill-parent"
      >
        <AutoLayout
          name="Title"
          overflow="visible"
          width="fill-parent"
        >
          <Text
            name="Insight Framework"
            fill="#2C2B2A"
            width="fill-parent"
            paragraphSpacing={
              9
            }
            lineHeight={64}
            fontFamily="Inter"
            fontSize={58}
            letterSpacing={
              -0.58
            }
            fontWeight={700}
          >
            Insight Framework
          </Text>
        </AutoLayout>
      </AutoLayout>
      <AutoLayout
        name="1"
        overflow="visible"
        direction="vertical"
        spacing={8}
        width="fill-parent"
      >
        <AutoLayout
          name="Q"
          overflow="visible"
          width="fill-parent"
        >
          <Text
            name="Why do we need to solve this problem?"
            fill="#2C2B2A"
            width="fill-parent"
            lineHeight={30}
            fontFamily="Inter"
            fontSize={22}
            fontWeight={700}
          >
            Why do we need to
            solve this
            problem?
          </Text>
        </AutoLayout>
        <AutoLayout
          name="A"
          overflow="visible"
          width="fill-parent"
        >
          <Text
            name="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            fill="#2C2B2A"
            width="fill-parent"
            paragraphSpacing={
              9
            }
            lineHeight={25}
            fontFamily="Inter"
            fontSize={15}
            strokeWidth={0}
            strokeAlign="inside"
          >
            Neque porro
            quisquam est, qui
            dolorem ipsum quia
            dolor sit amet,
            consectetur,
            adipisci velit,
            sed quia non
            numquam eius modi
            tempora incidunt
            ut labore et
            dolore magnam
            aliquam quaerat
            voluptatem.
          </Text>
        </AutoLayout>
      </AutoLayout>
      <AutoLayout
        name="2"
        overflow="visible"
        direction="vertical"
        spacing={8}
        width="fill-parent"
      >
        <AutoLayout
          name="Q"
          overflow="visible"
          width="fill-parent"
        >
          <Text
            name="What is stopping this from happening?"
            fill="#2C2B2A"
            width="fill-parent"
            lineHeight={30}
            fontFamily="Inter"
            fontSize={22}
            fontWeight={700}
          >
            What is stopping
            this from
            happening?
          </Text>
        </AutoLayout>
        <AutoLayout
          name="A"
          overflow="visible"
          width="fill-parent"
        >
          <Text
            name="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            fill="#2C2B2A"
            width="fill-parent"
            paragraphSpacing={
              9
            }
            lineHeight={25}
            fontFamily="Inter"
            fontSize={15}
            strokeWidth={0}
            strokeAlign="inside"
          >
            Neque porro
            quisquam est, qui
            dolorem ipsum quia
            dolor sit amet,
            consectetur,
            adipisci velit,
            sed quia non
            numquam eius modi
            tempora incidunt
            ut labore et
            dolore magnam
            aliquam quaerat
            voluptatem.
          </Text>
        </AutoLayout>
      </AutoLayout>
      <AutoLayout
        name="3"
        overflow="visible"
        direction="vertical"
        spacing={8}
        width="fill-parent"
      >
        <AutoLayout
          name="Q"
          overflow="visible"
          width="fill-parent"
        >
          <Text
            name="What are the key findings from current processes?"
            fill="#2C2B2A"
            width="fill-parent"
            lineHeight={30}
            fontFamily="Inter"
            fontSize={22}
            fontWeight={700}
          >
            What are the key
            findings from
            current processes?
          </Text>
        </AutoLayout>
        <AutoLayout
          name="A"
          overflow="visible"
          width="fill-parent"
        >
          <Text
            name="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            fill="#2C2B2A"
            width="fill-parent"
            paragraphSpacing={
              9
            }
            lineHeight={25}
            fontFamily="Inter"
            fontSize={15}
            strokeWidth={0}
            strokeAlign="inside"
          >
            Neque porro
            quisquam est, qui
            dolorem ipsum quia
            dolor sit amet,
            consectetur,
            adipisci velit,
            sed quia non
            numquam eius modi
            tempora incidunt
            ut labore et
            dolore magnam
            aliquam quaerat
            voluptatem.
          </Text>
        </AutoLayout>
      </AutoLayout>
      <AutoLayout
        name="4"
        overflow="visible"
        direction="vertical"
        spacing={8}
        width="fill-parent"
      >
        <AutoLayout
          name="Q"
          overflow="visible"
          width="fill-parent"
        >
          <Text
            name="What evidence validates the problem?"
            fill="#2C2B2A"
            width="fill-parent"
            lineHeight={30}
            fontFamily="Inter"
            fontSize={22}
            fontWeight={700}
          >
            What evidence
            validates the
            problem?
          </Text>
        </AutoLayout>
        <AutoLayout
          name="A"
          overflow="visible"
          width="fill-parent"
        >
          <AutoLayout
            name="List"
            overflow="visible"
            direction="vertical"
            spacing={4}
            width="fill-parent"
          >
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="Customer support? [Y/N]"
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                Customer
                support? [Y/N]
              </Text>
            </AutoLayout>
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="Data? [Y/N]"
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                Data? [Y/N]
              </Text>
            </AutoLayout>
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="User research? [Y/N]"
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                User research?
                [Y/N]
              </Text>
            </AutoLayout>
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="Social media? [Y/N]"
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                Social media?
                [Y/N]
              </Text>
            </AutoLayout>
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>
      <AutoLayout
        name="5"
        overflow="visible"
        direction="vertical"
        spacing={8}
        width="fill-parent"
      >
        <AutoLayout
          name="Q"
          overflow="visible"
          width="fill-parent"
        >
          <Text
            name="What are the user needs & wants?"
            fill="#2C2B2A"
            width="fill-parent"
            lineHeight={30}
            fontFamily="Inter"
            fontSize={22}
            fontWeight={700}
          >
            What are the user
            needs & wants?
          </Text>
        </AutoLayout>
        <AutoLayout
          name="A"
          overflow="visible"
          width="fill-parent"
        >
          <AutoLayout
            name="List"
            overflow="visible"
            direction="vertical"
            spacing={4}
            width="fill-parent"
          >
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="Autem quibusdam et aut officiis."
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                Autem
                quibusdam et
                aut officiis.
              </Text>
            </AutoLayout>
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="Harum quidem rerum facilis est et expedita."
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                Harum quidem
                rerum facilis
                est et
                expedita.
              </Text>
            </AutoLayout>
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="Itaque earum rerum hic tenetur a sapiente delectus."
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                Itaque earum
                rerum hic
                tenetur a
                sapiente
                delectus.
              </Text>
            </AutoLayout>
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="Sed quia non numquam eius modi tempora incidunt."
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                Sed quia non
                numquam eius
                modi tempora
                incidunt.
              </Text>
            </AutoLayout>
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>
      <AutoLayout
        name="6"
        overflow="visible"
        direction="vertical"
        spacing={8}
        width="fill-parent"
      >
        <AutoLayout
          name="Q"
          overflow="visible"
          width="fill-parent"
        >
          <Text
            name="What are the user stories/JTBDs we will be focusing on in phase/milestone 1?"
            fill="#2C2B2A"
            width="fill-parent"
            lineHeight={30}
            fontFamily="Inter"
            fontSize={22}
            fontWeight={700}
          >
            What are the user
            stories/JTBDs we
            will be focusing
            on in
            phase/milestone 1?
          </Text>
        </AutoLayout>
        <AutoLayout
          name="A"
          overflow="visible"
          width="fill-parent"
        >
          <AutoLayout
            name="List"
            overflow="visible"
            direction="vertical"
            spacing={4}
            width="fill-parent"
          >
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="Ut labore et dolore magnam aliquam quaerat voluptatem."
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                Ut labore et
                dolore magnam
                aliquam
                quaerat
                voluptatem.
              </Text>
            </AutoLayout>
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit."
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                Et harum
                quidem rerum
                facilis est et
                expedita
                distinctio.
                Nam libero
                tempore, cum
                soluta nobis
                est eligendi
                optio cumque
                nihil impedit.
              </Text>
            </AutoLayout>
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                Itaque earum
                rerum hic
                tenetur a
                sapiente
                delectus, ut
                aut reiciendis
                voluptatibus
                maiores alias
                consequatur
                aut
                perferendis
                doloribus
                asperiores
                repellat.
              </Text>
            </AutoLayout>
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>
      <AutoLayout
        name="7"
        overflow="visible"
        direction="vertical"
        spacing={8}
        width="fill-parent"
      >
        <AutoLayout
          name="Q"
          overflow="visible"
          width="fill-parent"
        >
          <Text
            name="What are the potential rabbit holes or interdependencies we have calculated?"
            fill="#2C2B2A"
            width="fill-parent"
            lineHeight={30}
            fontFamily="Inter"
            fontSize={22}
            fontWeight={700}
          >
            What are the
            potential rabbit
            holes or
            interdependencies
            we have
            calculated?
          </Text>
        </AutoLayout>
        <AutoLayout
          name="A"
          overflow="visible"
          width="fill-parent"
        >
          <AutoLayout
            name="List"
            overflow="visible"
            direction="vertical"
            spacing={4}
            width="fill-parent"
          >
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="Autem quibusdam et aut officiis."
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                Autem
                quibusdam et
                aut officiis.
              </Text>
            </AutoLayout>
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="Harum quidem rerum facilis est et expedita."
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                Harum quidem
                rerum facilis
                est et
                expedita.
              </Text>
            </AutoLayout>
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="Itaque earum rerum hic tenetur a sapiente delectus."
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                Itaque earum
                rerum hic
                tenetur a
                sapiente
                delectus.
              </Text>
            </AutoLayout>
            <AutoLayout
              name="List Item"
              overflow="visible"
              width="fill-parent"
            >
              <Text
                name="Sed quia non numquam eius modi tempora incidunt."
                fill="#2C2B2A"
                width="fill-parent"
                paragraphSpacing={
                  9
                }
                lineHeight={
                  25
                }
                fontFamily="Inter"
                fontSize={15}
                strokeWidth={
                  0
                }
                strokeAlign="inside"
              >
                Sed quia non
                numquam eius
                modi tempora
                incidunt.
              </Text>
            </AutoLayout>
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>
      <AutoLayout
        name="8"
        overflow="visible"
        direction="vertical"
        spacing={8}
        width="fill-parent"
      >
        <AutoLayout
          name="Q"
          overflow="visible"
          width="fill-parent"
        >
          <Text
            name="What would success metrics look like?"
            fill="#2C2B2A"
            width="fill-parent"
            lineHeight={30}
            fontFamily="Inter"
            fontSize={22}
            fontWeight={700}
          >
            What would success
            metrics look like?
          </Text>
        </AutoLayout>
        <AutoLayout
          name="A"
          overflow="visible"
          width="fill-parent"
        >
          <Text
            name="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            fill="#2C2B2A"
            width="fill-parent"
            paragraphSpacing={
              9
            }
            lineHeight={25}
            fontFamily="Inter"
            fontSize={15}
            strokeWidth={0}
            strokeAlign="inside"
          >
            Itaque earum rerum
            hic tenetur a
            sapiente delectus,
            ut aut reiciendis
            voluptatibus
            maiores alias
            consequatur aut
            perferendis
            doloribus
            asperiores
            repellat.
          </Text>
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  );
}
widget.register(InsightFramework);
