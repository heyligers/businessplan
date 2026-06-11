import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Legal.css';

export default function Legal() {
  const { page } = useParams();
  const { t } = useLanguage();

  const getContent = () => {
    switch (page) {
      case 'impressum':
        return (
          <>
            <h1>Impressum</h1>
            <div className="legal-block">
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>
                Europa-Park Istanbul Su Parkı A.Ş.<br />
                Florya Güneş Plajı, Şenlikköy, Florya Sahil Yolu<br />
                34153 Bakırköy/İstanbul<br />
                Türkei
              </p>
              
              <h2>Vertreten durch:</h2>
              <p>Geschäftsführung: Roland Mack (Fiktiv für Präsentation)</p>

              <h2>Kontakt:</h2>
              <p>
                Telefon: +90 212 555 01 23<br />
                E-Mail: info@europapark-istanbul.com
              </p>

              <h2>Registereintrag:</h2>
              <p>
                Eintragung im Handelsregister Istanbul.<br />
                Registernummer: HRB 123456
              </p>

              <h2>Umsatzsteuer-ID:</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                TR1234567890
              </p>

              <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
              <p>
                Direktion Europa-Park Istanbul<br />
                Florya Güneş Plajı, 34153 Istanbul
              </p>
            </div>
          </>
        );
      case 'datenschutz':
        return (
          <>
            <h1>Datenschutzerklärung</h1>
            <div className="legal-block">
              <h2>1. Datenschutz auf einen Blick</h2>
              <h3>Allgemeine Hinweise</h3>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

              <h2>2. Datenerfassung auf unserer Website</h2>
              <h3>Cookies</h3>
              <p>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>

              <h3>Server-Log-Dateien</h3>
              <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind Browsertyp, Betriebssystem, Referrer URL, Hostname und Uhrzeit.</p>

              <h2>3. Zahlungsanbieter</h2>
              <p>Für die Buchung von Tickets nutzen wir (in diesem simulierten Prototyp) externe Zahlungsdienstleister. Ihre Zahlungsdaten werden streng vertraulich behandelt und verschlüsselt übertragen (SSL/TLS).</p>
            </div>
          </>
        );
      case 'agb':
        return (
          <>
            <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
            <div className="legal-block">
              <h2>§ 1 Geltungsbereich</h2>
              <p>Diese Geschäftsbedingungen gelten für alle Verträge über den Erwerb von Tickets und die Nutzung der Wasserattraktionen (Jetski, Wibit, SUP, Tretboot) des Europa-Park Istanbul am Florya Güneş Strand.</p>

              <h2>§ 2 Vertragsschluss</h2>
              <p>Der Vertrag kommt durch die Annahme der Online-Buchung durch uns zustande. Der Kunde erhält nach erfolgreicher (Demo-)Zahlung eine Bestätigung.</p>

              <h2>§ 3 Sicherheitsbestimmungen & Hausordnung</h2>
              <p>1. Den Anweisungen des Rettungspersonals (Lifeguards) ist jederzeit Folge zu leisten.<br/>
                 2. Bei Jetski und Wibit-Parcours besteht absolute Schwimmwestenpflicht.<br/>
                 3. Der Betreiber behält sich das Recht vor, bei schlechten Wetterbedingungen (Sturm, Gewitter) den Betrieb aus Sicherheitsgründen sofort einzustellen. Tickets behalten in diesem Fall ihre Gültigkeit für einen Ersatztermin.</p>

              <h2>§ 4 Haftung</h2>
              <p>Die Nutzung der Anlagen geschieht auf eigene Gefahr. Der Betreiber haftet nur für Vorsatz und grobe Fahrlässigkeit. Für mitgebrachte Wertsachen wird keine Haftung übernommen.</p>
              
              <h2>§ 5 Stornierung</h2>
              <p>Gebuchte Tickets können bis zu 24 Stunden vor dem Termin kostenfrei storniert werden.</p>
            </div>
          </>
        );
      default:
        return <h1>Seite nicht gefunden</h1>;
    }
  };

  return (
    <div className="legal-page fade-in">
      <div className="legal-container glass-panel">
        {getContent()}
      </div>
    </div>
  );
}
