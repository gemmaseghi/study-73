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
          title: "Willkommen!",
          text: `
            <p>
              In diesem Experiment spielst du ein Koordinationsspiel mit einem virtuellen Spieler namens <strong>Leo</strong>.
            </p>

            <p>
              Das Spiel umfasst zwei Rollen: <strong>Die Sprecherrolle</strong> und <strong>die Höhrerrolle</strong>.
            </p>

            <p>
              Während des Spiels <strong>wird Leo immer die Sprecherrolle übernehmen</strong> und <strong>du wirst immer die Höhrerrolle übernhemen</strong>.
            </p>

            <p>
              <strong>Bevor das Spiel startet, wirst du jedoch kurz in beide Rollen schlüpfen</strong>, um zu verstehen, wie das Spiel funktioniert.
            </p>

          `
        },

        {
          title: "Die Sprecherrolle",
          text: `
            <p>
              Beginnen wir mit der Sprecherrolle.

              <strong>Deine Aufgabe in der Sprecherrolle ist es, das mit einem Sternchen (*) markierte Objekt so zu beschreiben, dass Leo es identifizieren kann</strong>.

              Leo sieht das Sternchen <strong>nicht</strong>.
            </p>

            <p>
              Du <strong>darfst keine Positionsangaben</strong> wie "oben links" oder "unten rechts" in deinen Beschreibungen verwenden.
            </p>

            <p>
              Hier ist ein Beispiel dafür, was du sehen wirst:
            </p>

            <div class="instruction-figure">
              <img
                src="instructions/instructions_speaker.png"
                alt="Example speaker view"
                class="example-image"
              />

              <p>
                Eine mögliche Beschreibung wäre in diesem Fall: <strong>Das T-Shirt</strong>.
              </p>
            </div>
          `
        },

        {
          title: "Übung Sprecherrolle",
          text: `
            <p>
              Jetzt schlüpst du in die Sprecherrolle!
            </p>

            <p>
              Schreibe für jedes Gitter <strong>eine Beschreibung des mit dem Sternchen (*) markierten Objekts</strong>. Leo wird deine Beschreibung nutzen, um das Objekt zu identifizieren. 
            </p>

            <p>
              Schreibe dann eine kurze Erklärung, warum du diese Beschreibung gewählt hast.
            </p>

            <p>
              Du wirst zur Übung <strong>drei Objekte</strong> beschreiben.
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


.example-image {
  display: block;
  margin: 24px auto;
  max-width: 600px;
  width: 100%;
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

.instruction-figure {
  text-align: center;
  margin: 8px 0;
}

.image-caption {
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

.instruction-image {
  display: block;
  margin: 0 auto;
  max-width: 300px;
  width: auto;
  height: auto;
}

.example-image {
  display: block;
  margin: 24px auto;
  max-width: 650px;
  width: auto;
  height: auto;
}


</style>