
i
m
p
o
r
t
 
a
x
i
o
s
 
f
r
o
m
 
"
a
x
i
o
s
"
;


i
m
p
o
r
t
 
{
 
u
s
e
A
u
t
h
S
t
o
r
e
 
}
 
f
r
o
m
 
"
.
/
a
u
t
h
.
s
t
o
r
e
"
;




c
o
n
s
t
 
A
P
I
_
B
A
S
E
 
=
 
(
i
m
p
o
r
t
.
m
e
t
a
.
e
n
v
.
V
I
T
E
_
A
P
I
_
U
R
L
 
a
s
 
s
t
r
i
n
g
 
|
 
u
n
d
e
f
i
n
e
d
)
 
?
?
 
"
h
t
t
p
:
/
/
l
o
c
a
l
h
o
s
t
:
3
0
0
0
/
a
p
i
"
;


e
x
p
o
r
t
 
c
o
n
s
t
 
S
E
R
V
E
R
_
U
R
L
 
=
 
A
P
I
_
B
A
S
E
.
r
e
p
l
a
c
e
(
/
\
/
a
p
i
\
/
?
$
/
,
 
"
"
)
;




c
o
n
s
t
 
a
p
i
 
=
 
a
x
i
o
s
.
c
r
e
a
t
e
(
{


 
 
b
a
s
e
U
R
L
:
 
A
P
I
_
B
A
S
E
,


 
 
w
i
t
h
C
r
e
d
e
n
t
i
a
l
s
:
 
t
r
u
e
,
 
/
/
 
s
e
n
d
s
 
h
t
t
p
O
n
l
y
 
c
o
o
k
i
e
 
a
u
t
o
m
a
t
i
c
a
l
l
y


 
 
t
i
m
e
o
u
t
:
 
3
0
_
0
0
0
,
 
 
 
 
 
 
 
/
/
 
3
0
-
s
e
c
o
n
d
 
t
i
m
e
o
u
t
 
t
o
 
a
v
o
i
d
 
h
a
n
g
i
n
g
 
r
e
q
u
e
s
t
s


}
)
;




a
p
i
.
i
n
t
e
r
c
e
p
t
o
r
s
.
r
e
s
p
o
n
s
e
.
u
s
e
(


 
 
(
r
e
s
p
o
n
s
e
)
 
=
>
 
r
e
s
p
o
n
s
e
,


 
 
a
s
y
n
c
 
(
e
r
r
o
r
)
 
=
>
 
{


 
 
 
 
i
f
 
(
e
r
r
o
r
.
r
e
s
p
o
n
s
e
?
.
s
t
a
t
u
s
 
=
=
=
 
4
0
1
)
 
{


 
 
 
 
 
 
u
s
e
A
u
t
h
S
t
o
r
e
.
g
e
t
S
t
a
t
e
(
)
.
l
o
g
o
u
t
(
)
;


 
 
 
 
 
 
/
/
 
D
i
s
p
a
t
c
h
 
a
 
c
u
s
t
o
m
 
e
v
e
n
t
 
s
o
 
t
h
e
 
r
o
u
t
e
r
 
c
a
n
 
h
a
n
d
l
e
 
n
a
v
i
g
a
t
i
o
n


 
 
 
 
 
 
/
/
 
w
i
t
h
o
u
t
 
a
 
f
u
l
l
-
p
a
g
e
 
r
e
l
o
a
d
 
t
h
a
t
 
w
i
p
e
s
 
i
n
-
m
e
m
o
r
y
 
s
t
a
t
e
.


 
 
 
 
 
 
w
i
n
d
o
w
.
d
i
s
p
a
t
c
h
E
v
e
n
t
(
n
e
w
 
C
u
s
t
o
m
E
v
e
n
t
(
"
a
u
t
h
:
e
x
p
i
r
e
d
"
)
)
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
P
r
o
m
i
s
e
.
r
e
j
e
c
t
(
e
r
r
o
r
)
;


 
 
}


)
;




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
a
p
i
;


