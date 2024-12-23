from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.dropdown import DropDown
from kivy.uix.button import Button
from kivy.uix.label import Label
from kivy.uix.textinput import TextInput
from kivy.uix.spinner import Spinner
from kivy.uix.gridlayout import GridLayout
from kivy.uix.popup import Popup
from kivy.uix.scrollview import ScrollView
from kivy.uix.boxlayout import BoxLayout

class RentalForm(BoxLayout):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.orientation = 'vertical'
        self.padding = 10
        self.spacing = 10
        
        self.add_widget(Label(text="Nama Lengkap:"))
        self.nama_input = TextInput(hint_text="Masukkan Nama Lengkap", multiline=False)
        self.add_widget(self.nama_input)

        self.add_widget(Label(text="Alamat Email:"))
        self.email_input = TextInput(hint_text="Masukkan Email", multiline=False)
        self.add_widget(self.email_input)

        self.add_widget(Label(text="Pilih Gadget:"))
        self.gadget_spinner = Spinner(
            text="Pilih Gadget",
            values=("Laptop", "Smartphone"),
            size_hint=(None, None),
            size=(200, 44)
        )
        self.add_widget(self.gadget_spinner)

        self.add_widget(Label(text="Durasi Penyewaan (Hari):"))
        self.durasi_input = TextInput(hint_text="Masukkan Durasi (hari)", multiline=False)
        self.add_widget(self.durasi_input)

        self.submit_button = Button(text="Kirim", size_hint=(None, None), size=(200, 44))
        self.submit_button.bind(on_press=self.submit_form)
        self.add_widget(self.submit_button)

    def submit_form(self, instance):
        nama = self.nama_input.text
        email = self.email_input.text
        gadget = self.gadget_spinner.text
        durasi = self.durasi_input.text

        # Menampilkan popup konfirmasi
        if not nama or not email or not durasi or gadget == "Pilih Gadget":
            popup = Popup(title="Error", content=Label(text="Semua field harus diisi dengan benar!"), size_hint=(0.5, 0.5))
            popup.open()
        else:
            popup = Popup(title="Konfirmasi Transaksi", content=Label(text=f"Transaksi Penyewaan Gadget\n\nNama: {nama}\nEmail: {email}\nGadget: {gadget}\nDurasi: {durasi} Hari"), size_hint=(0.5, 0.5))
            popup.open()

class RentalApp(App):
    def build(self):
        return RentalForm()

if __name__ == '__main__':
    RentalApp().run()
