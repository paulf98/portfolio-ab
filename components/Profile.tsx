import Image from "next/image";
import ABSitzend from "../public/images/AB-sitzend.jpg";

export default function Profile() {
  return (
    <div className="container w-full max-w-5xl mx-auto bg-white flex flex-wrap md:flex-nowrap justify-content-around items-center gap-8 p-8 lg:py-16">
      <div
        className="relative flex-1 rounded-md mx-auto"
        style={{ minWidth: "250px" }}
      >
        <Image
          src={ABSitzend}
          alt="Alexander Beuerle sitzend im Stadion"
          layout="responsive"
          objectFit="cover"
          className="rounded-md"
          placeholder="blur"
        />
      </div>
      <div className="pt-6 md:p-8 grow-0 text-center md:text-left space-y-4 ">
        <blockquote>
          <h1 className="text-3xl lg:text-4xl text-center lg:text-left font-bold mb-8">
            Mein Leitbild
          </h1>
          <p className="text-justify">
            Als leidenschaftlicher Sportler habe ich das Glück, mein Hobby zum
            Beruf machen zu dürfen. Diese Leidenschaft möchte ich in meiner
            Tätigkeit als Dozent an alle Teilnehmenden übertragen. Meine
            Schwerpunkte sehe ich dabei ganz klar in drei Bereichen: <br />
          </p>
          <ul className="list-disc text-left ml-6">
            <li>Vereins- und Verbandsmanagement</li>
            <li>Eventmanagement und Veranstaltungsleitung</li>
            <li>Nachhaltigkeit und gesellschaftliche Verantwortung</li>
          </ul>
          <br />
          <p className="text-justify">
            Dabei möchte ich mehr als reines Wissen vermitteln. Ich stehe für
            zielgruppenspezifische Vermittlung unter aktiver Einbindung aller
            Teilnehmenden mit dem Ziel, Begeisterung zu schaffen. Durch
            vielfältige Methodenkompetenz verstehe ich mich als Dienstleister
            meiner Teilnehmenden und liefere maßgeschneiderte Inhalte auf die
            gewünschten Bedürfnisse. Ich glaube fest an die Verbindung von
            anwendungsorientierter Lehre mit wissenschaftlichen Erkenntnissen.
          </p>
        </blockquote>
      </div>
    </div>
  );
}
