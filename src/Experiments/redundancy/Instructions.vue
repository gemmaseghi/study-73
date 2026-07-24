<template>
  <Screen>
    <div class="instructions">
      <h2>{{ pages[page].title }}</h2>

      <div v-html="pages[page].text"></div>

      <div class="button-container">
        <button v-if="page > 0" @click="previousPage">
          Zurück
        </button>

        <button
          v-if="page < pages.length - 1"
          @click="pageForward"
        >
          Weiter
        </button>

        <button
          v-else
          @click="pageForward"
        >
          Weiter
        </button>
      </div>
    </div>
  </Screen>
</template>

<script>
export default {
  name: "InstructionsWithBack",
  data() {
    return {
      page: 0,
      pages: [
        {
          title: "Einverständniserklärung",
          text: `
            <p>
              Vielen Dank für dein Interesse an unserer Studie. Bitte lies dir die folgenden Informationen durch, bevor du dich für eine Teilnahme entscheidest. Deine Teilnahme ist freiwillig. Bei weiteren Fragen zur Studie kannst du dich gerne per E-Mail an gemma.seghi@uni-tuebingen.de wenden. Klicke am Ende dieser Seite auf die Schaltfläche „Weiter“, um fortzufahren.
            </p>

            <p>
              Kontakt:
              Gemma Seghi
              Seminar für Sprachwissenschaft
              Keplerstr. 2, 72076 Tübingen
              gemma.seghi@uni-tuebingen.de
            </p>

            <p>
              <strong>Informationen zur Studie</strong>.
            </p>

            <p>
              1. Zweck: In dieser Studie untersuchen wir, wie wir Objekte anhand von Beschreibungen auswählen. Durch deine Teilnahme erhälst du einen Einblick in unsere Forschung. Bei Interesse erklären wir dir im Anschluss gerne die konkreten Ziele dieser Studie. Außerdem hilfst du uns dabei, neue Erkenntnisse über die menschliche Kognition zu gewinnen.
            </p>

            <p>
              2. Datenschutz: Wir speichern die gesammelten Daten unter einer zufällig vergebenen Teilnahme-ID und somit vollständig anonymisiert auf einem Server der Universität Tübingen. Alle Personen, die Zugriff auf die personenbezogenen Daten haben, sind zur Geheimhaltung verpflichtet. Sollten Daten aus dieser Studie veröffentlicht werden, geschieht dies in anonymisierter Form. Deine Daten können dir daher nicht zugeordnet werden.
            </p>

            <p>
              3. Vergütung: Für deine Teilnahme erhälst du 0,5 Versuchspersonenstunden.           
            </p>

            <p>
              4. Freiwillige Teilnahme und Recht auf Teilnahmeabbruch: Deine Teilnahme an dieser Studie ist vollkommen freiwillig. Du kannst die Studie jedezeit abbrechen. Dir entstehen dadurch keinerlei Nachteile. Du musst keinen Grund für den Abbruch der Studie angeben. Wenn du vor Abschluss der Datenerhebung die Studie abbrichst, werden deine Daten gelöscht. Bitte beachte, dass eine Vergütung nicht möglich ist, wenn du deine Teilnahme vor Ende der Studie abbrichst. Sollten technische Probleme auftreten, sende uns bitte eine Nachricht über die angegebene E-Mail-Adresse.           
            </p>

            <p>
              5. Risiken: Die Teilnahme birgt keinerlei körperliche Risiken.           
            </p>

            <p>
              6. Sensible Daten: Wir fragen nicht nach sensiblen personenbezogenen Daten.           
            </p>            

            <p>
              7. Datenspeicherung und -weitergabe: Wir werden diese Daten an andere Forschende weitergeben. Zu diesem Zweck werden wir sie auf unserer Website der Open Science Foundation veröffentlichen. Sollte die Studie nicht zu einer wissenschaftlichen Veröffentlichung führen, werden wir die Daten für maximal fünf Jahre auf einem passwortgeschützten Server der Universität speichern. Da die Daten vollständig anonymisiert gespeichert werden, können wir deine Daten nach der Speicherung nicht mehr löschen.        
            </p>  

            <p>
              Einwilligung
              · Ich bestätige, dass ich volljährig bin.
              · Ich stimme der Teilnahme an der folgenden Studie zu.
              · Ich kann die Studie jederzeit abbrechen.
              · Ich habe keine weiteren Fragen.        
            </p>            
          `
        },
        
        {
          title: "Willkommen zum ersten Experiment!",
          text: `
            <p>
              Das erste Experiment besteht aus einer Aufgabe, die wir mit einer Gruppe von Kindern durchführen. Wir brauchen auch Erwachsene, die als Kontrollgruppe an dem Experiment teilnehmen. Da die Aufgabe die gleiche für Kinder und Erwachsene ist, ist es ganz normal, wenn du sie sehr einfach findest.
            </p>

            <p>
              In diesem Experiment wirst du ein Kommunikationsspiel mit einem anderen Teilnehmenden spielen.
            </p>

            <p>
              Deine Aufgabe ist es, Objekte so zu beschreiben, dass ein anderer Teilnehmender sie korrekt identifizieren kann.
            </p>

            <p>
              Klicke <strong>Weiter</strong> um zu erfahren, wie das Spiel funktioniert.
            </p>

          `
        },

        {
          title: "Das Spiel",
          text: `

            <p>
              Auf der <strong>linken Seite</strong> deines Bildschirms wirst du einen <strong>grauen Bildausschnitt mit drei bunten Aufklebern darauf</strong> sehen. Der andere Teilnehemende sieht den gleichen grauen Bildausschnitt, aber <strong>nicht die bunten Aufkleber</strong>.
            </p>
          
            <p>
              In jeder Runde <strong>zeigt ein roter Pfeil auf einen der Aufkleber</strong>. Das ist der Aufkleber, den du beschreiben musst.
            </p>

            <p>
              Auf der <strong>rechten Seite</strong> deines Bildschirms wirst du ein <strong>Gitter mit vier Objekten</strong> sehen. Der andere Teilnehmende sieht das gleiche Gitter. Eines dieser vier Objekte entspricht dem Aufkleber, auf den der rote Pfeil zeigt.
            </p>

            <p>
              Deine Aufgabe ist es, <strong>den markierten Aufkleber zu beschreiben</strong>, so dass der andere Teilnehmende das richtige Objekt innerhalb des Gitters auswählen und zu dem grauen Bildausschnitt hinzufügen kann.
            </p>

            <p>
              Du <strong>musst nicht beschreiben, wo im Bildausschnitt sich der Aufkleber befindet</strong>. Gib einfach eine Beschreibung an, die das richtige Objekt aus den vier Objekten im Gitter deutlich macht.
            </p>

            <p>
              Insgesamt wirst du <strong>8 Bildausschnitte</strong> sehen. Unten siehst du ein Beispiel eines grauen Bildausschnitts mit drei Aufklebern (links) und dem dazugehörigen Gitter mit Objekten (rechts).
            </p>

            <div class="instruction-images">
              <div class="instruction-image">
                <p><strong>Der Bildausschnitt</strong></p>
                <img
                  src="redundancy/instructions/example.png"
                  alt="Grey scene with three coloured stickers and a red arrow pointing to one of them."
                />
              </div>

              <div class="instruction-image">
                <p><strong>Das Gitter</strong></p>
                <img
                  src="redundancy/instructions/example_grid.png"
                  alt="Grid containing the sticker indicated by the red arrow and three other objects."
                />
              </div>
            </div>

            <p>
              Klicke <strong>Weiter</strong>, um das Spiel zu starten.
            </p>
              

          `
        },
      ]
    };
  },

  methods: {

    previousPage() {
      this.page--;
    },

    pageForward() {
      if (this.page < this.pages.length - 1) {
        this.page++;
      } else {
        this.$magpie.nextScreen();
      }
    }
  },
};
</script>

<style>
.instructions {
  width: 700px;
  max-width: 95vw;
  margin: 0 auto;
  text-align: justify;
}

.instructions h2 {
  text-align: center;
}

.instructions p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 12px;
}


.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.button-container button {
  width: auto;
  margin: 0 5px;
}

.instruction-images {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 1000px;
  margin: 24px auto;
}

.instruction-image {
  flex: 1;
  min-width: 0;
  text-align: center;
}

.instruction-image img {
  display: block;
  width: 100%;
  height: 350px;
  object-fit: contain;
}
</style>