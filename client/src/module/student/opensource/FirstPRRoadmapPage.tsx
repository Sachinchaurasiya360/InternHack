
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
S
t
a
t
e
,
 
u
s
e
C
a
l
l
b
a
c
k
,
 
u
s
e
E
f
f
e
c
t
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{
 
C
h
e
c
k
C
i
r
c
l
e
2
,
 
G
i
t
P
u
l
l
R
e
q
u
e
s
t
,
 
A
r
r
o
w
R
i
g
h
t
,
 
T
r
o
p
h
y
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
L
i
n
k
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
S
E
O
"
;


i
m
p
o
r
t
 
{
 
B
u
t
t
o
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
b
u
t
t
o
n
"
;


i
m
p
o
r
t
 
{
 
C
o
n
f
i
r
m
D
i
a
l
o
g
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
C
o
n
f
i
r
m
D
i
a
l
o
g
"
;


i
m
p
o
r
t
 
t
o
a
s
t
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
t
o
a
s
t
"
;


i
m
p
o
r
t
 
{
 
c
a
n
o
n
i
c
a
l
U
r
l
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
s
e
o
.
u
t
i
l
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


 
 
f
e
t
c
h
F
i
r
s
t
P
R
P
r
o
g
r
e
s
s
,


 
 
p
a
t
c
h
F
i
r
s
t
P
R
P
r
o
g
r
e
s
s
,


}
 
f
r
o
m
 
"
.
/
a
p
i
/
o
p
e
n
s
o
u
r
c
e
.
a
p
i
"
;


i
m
p
o
r
t
 
g
u
i
d
e
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
o
p
e
n
-
s
o
u
r
c
e
-
g
u
i
d
e
.
j
s
o
n
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
.
/
.
.
/
.
.
/
l
i
b
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
C
o
a
c
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
s
t
o
r
e
s
/
c
o
a
c
h
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
{
 
n
o
t
i
f
y
L
e
a
r
n
i
n
g
P
a
t
h
P
r
o
g
r
e
s
s
C
h
a
n
g
e
d
 
}
 
f
r
o
m
 
"
.
/
l
e
a
r
n
i
n
g
-
p
a
t
h
s
.
d
a
t
a
"
;


i
m
p
o
r
t
 
{
 
N
e
x
t
I
n
P
a
t
h
C
a
r
d
 
}
 
f
r
o
m
 
"
.
/
c
o
m
p
o
n
e
n
t
s
/
N
e
x
t
I
n
P
a
t
h
C
a
r
d
"
;




/
/
 
─
─
─
 
T
y
p
e
s
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


i
n
t
e
r
f
a
c
e
 
S
t
e
p
 
{


 
 
s
t
e
p
:
 
n
u
m
b
e
r
;


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
?
:
 
n
u
m
b
e
r
;


}




/
/
 
─
─
─
 
D
a
t
a
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


c
o
n
s
t
 
S
T
E
P
S
:
 
S
t
e
p
[
]
 
=
 
g
u
i
d
e
D
a
t
a
.
o
p
e
n
S
o
u
r
c
e
R
o
a
d
m
a
p
 
a
s
 
S
t
e
p
[
]
;


/
/
 
─
─
─
 
P
a
g
e
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


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
 
f
u
n
c
t
i
o
n
 
F
i
r
s
t
P
R
R
o
a
d
m
a
p
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
[
s
h
o
w
R
e
s
e
t
C
o
n
f
i
r
m
,
 
s
e
t
S
h
o
w
R
e
s
e
t
C
o
n
f
i
r
m
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
c
o
m
p
l
e
t
e
d
,
 
s
e
t
C
o
m
p
l
e
t
e
d
]
 
=
 
u
s
e
S
t
a
t
e
<
S
e
t
<
s
t
r
i
n
g
>
>
(
n
e
w
 
S
e
t
(
)
)
;


 
 
c
o
n
s
t
 
[
i
s
L
o
a
d
i
n
g
,
 
s
e
t
I
s
L
o
a
d
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
(
t
r
u
e
)
;


 
 
c
o
n
s
t
 
{
 
u
s
e
r
 
}
 
=
 
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
(
)
;


 
 
c
o
n
s
t
 
t
r
i
g
g
e
r
C
o
a
c
h
 
=
 
u
s
e
C
o
a
c
h
S
t
o
r
e
(
(
s
)
 
=
>
 
s
.
t
r
i
g
g
e
r
C
o
a
c
h
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
l
e
t
 
i
s
M
o
u
n
t
e
d
 
=
 
t
r
u
e
;




 
 
 
 
f
e
t
c
h
F
i
r
s
t
P
R
P
r
o
g
r
e
s
s
(
)


 
 
 
 
 
 
.
t
h
e
n
(
(
c
o
m
p
l
e
t
e
d
S
t
e
p
I
d
s
:
 
s
t
r
i
n
g
[
]
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
i
s
M
o
u
n
t
e
d
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
C
o
m
p
l
e
t
e
d
(
n
e
w
 
S
e
t
(
c
o
m
p
l
e
t
e
d
S
t
e
p
I
d
s
)
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
)


 
 
 
 
 
 
.
c
a
t
c
h
(
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
i
s
M
o
u
n
t
e
d
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
C
o
m
p
l
e
t
e
d
(
n
e
w
 
S
e
t
(
)
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
)


 
 
 
 
 
 
.
f
i
n
a
l
l
y
(
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
i
s
M
o
u
n
t
e
d
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
I
s
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
)
;




 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
{


 
 
 
 
 
 
i
s
M
o
u
n
t
e
d
 
=
 
f
a
l
s
e
;


 
 
 
 
}
;


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
t
o
g
g
l
e
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(


 
 
 
 
(
i
d
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
u
r
r
e
n
t
l
y
C
o
m
p
l
e
t
e
d
 
=
 
c
o
m
p
l
e
t
e
d
.
h
a
s
(
i
d
)
;


 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
C
o
m
p
l
e
t
e
d
 
=
 
!
i
s
C
u
r
r
e
n
t
l
y
C
o
m
p
l
e
t
e
d
;




 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
o
m
p
l
e
t
i
n
g
L
a
s
t
S
t
e
p
 
=
 
n
e
x
t
C
o
m
p
l
e
t
e
d
 
&
&
 
c
o
m
p
l
e
t
e
d
.
s
i
z
e
 
=
=
=
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
;




 
 
 
 
 
 
s
e
t
C
o
m
p
l
e
t
e
d
(
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
 
=
 
n
e
w
 
S
e
t
(
p
r
e
v
)
;


 
 
 
 
 
 
 
 
i
f
 
(
n
e
x
t
C
o
m
p
l
e
t
e
d
)
 
n
e
x
t
.
a
d
d
(
i
d
)
;


 
 
 
 
 
 
 
 
e
l
s
e
 
n
e
x
t
.
d
e
l
e
t
e
(
i
d
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
;


 
 
 
 
 
 
}
)
;




 
 
 
 
 
 
/
/
 
T
r
i
g
g
e
r
 
c
o
a
c
h
 
i
f
 
t
h
i
s
 
c
l
i
c
k
 
c
o
m
p
l
e
t
e
s
 
t
h
e
 
r
o
a
d
m
a
p


 
 
 
 
 
 
i
f
 
(
i
s
C
o
m
p
l
e
t
i
n
g
L
a
s
t
S
t
e
p
)
 
{


 
 
 
 
 
 
 
 
t
r
i
g
g
e
r
C
o
a
c
h
(
{


 
 
 
 
 
 
 
 
 
 
t
r
i
g
g
e
r
:
 
"
F
I
R
S
T
_
P
R
_
C
O
M
P
L
E
T
E
"
,


 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
x
t
:
 
{


 
 
 
 
 
 
 
 
 
 
 
 
s
k
i
l
l
s
:
 
u
s
e
r
?
.
s
k
i
l
l
s
 
|
|
 
[
]
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
m
p
l
e
t
e
d
G
u
i
d
e
s
:
 
[
"
F
i
r
s
t
 
P
u
l
l
 
R
e
q
u
e
s
t
 
R
o
a
d
m
a
p
"
]
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
}




 
 
 
 
 
 
v
o
i
d
 
p
a
t
c
h
F
i
r
s
t
P
R
P
r
o
g
r
e
s
s
(
i
d
,
 
n
e
x
t
C
o
m
p
l
e
t
e
d
)


 
 
 
 
 
 
 
 
.
t
h
e
n
(
(
)
 
=
>
 
n
o
t
i
f
y
L
e
a
r
n
i
n
g
P
a
t
h
P
r
o
g
r
e
s
s
C
h
a
n
g
e
d
(
)
)


 
 
 
 
 
 
 
 
.
c
a
t
c
h
(
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
C
o
m
p
l
e
t
e
d
(
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
o
l
l
e
d
B
a
c
k
 
=
 
n
e
w
 
S
e
t
(
p
r
e
v
)
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
s
C
u
r
r
e
n
t
l
y
C
o
m
p
l
e
t
e
d
)
 
r
o
l
l
e
d
B
a
c
k
.
a
d
d
(
i
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
r
o
l
l
e
d
B
a
c
k
.
d
e
l
e
t
e
(
i
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
r
o
l
l
e
d
B
a
c
k
;


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
n
o
t
i
f
y
L
e
a
r
n
i
n
g
P
a
t
h
P
r
o
g
r
e
s
s
C
h
a
n
g
e
d
(
)
;


 
 
 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
u
p
d
a
t
e
 
p
r
o
g
r
e
s
s
.
 
P
l
e
a
s
e
 
t
r
y
 
a
g
a
i
n
.
"
)
;


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
}
,


 
 
 
 
[
c
o
m
p
l
e
t
e
d
,
 
t
r
i
g
g
e
r
C
o
a
c
h
,
 
u
s
e
r
]
,


 
 
)
;




 
 
c
o
n
s
t
 
t
o
t
a
l
S
t
e
p
s
 
=
 
S
T
E
P
S
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
p
c
t
 
=
 
M
a
t
h
.
r
o
u
n
d
(
(
c
o
m
p
l
e
t
e
d
.
s
i
z
e
 
/
 
t
o
t
a
l
S
t
e
p
s
)
 
*
 
1
0
0
)
;


 
 
c
o
n
s
t
 
a
l
l
D
o
n
e
 
=
 
c
o
m
p
l
e
t
e
d
.
s
i
z
e
 
=
=
=
 
t
o
t
a
l
S
t
e
p
s
;


 
 
c
o
n
s
t
 
t
o
t
a
l
E
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
 
=
 
S
T
E
P
S
.
r
e
d
u
c
e
(


 
 
 
 
(
s
u
m
,
 
s
t
e
p
)
 
=
>
 
s
u
m
 
+
 
(
s
t
e
p
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
 
|
|
 
0
)
,


 
 
 
 
0
,


 
 
)
;


 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
S
t
e
p
 
=
 
S
T
E
P
S
.
f
i
n
d
(
(
s
)
 
=
>
 
!
c
o
m
p
l
e
t
e
d
.
h
a
s
(
s
.
i
d
)
)
;


 
 
c
o
n
s
t
 
c
o
m
p
l
e
t
e
d
M
i
n
u
t
e
s
 
=
 
S
T
E
P
S
.
f
i
l
t
e
r
(
(
s
)
 
=
>
 
c
o
m
p
l
e
t
e
d
.
h
a
s
(
s
.
i
d
)
)
.
r
e
d
u
c
e
(


 
 
 
 
(
s
u
m
,
 
s
)
 
=
>
 
s
u
m
 
+
 
(
s
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
 
|
|
 
0
)
,


 
 
 
 
0
,


 
 
)
;


 
 
c
o
n
s
t
 
r
e
m
a
i
n
i
n
g
M
i
n
u
t
e
s
 
=
 
t
o
t
a
l
E
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
 
-
 
c
o
m
p
l
e
t
e
d
M
i
n
u
t
e
s
;




 
 
i
f
 
(
i
s
L
o
a
d
i
n
g
)
 
{


 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
p
b
-
1
2
"
>


 
 
 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
F
i
r
s
t
 
P
u
l
l
 
R
e
q
u
e
s
t
 
G
u
i
d
e
 
-
 
O
p
e
n
 
S
o
u
r
c
e
 
f
o
r
 
B
e
g
i
n
n
e
r
s
"


 
 
 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
"
S
t
e
p
-
b
y
-
s
t
e
p
 
r
o
a
d
m
a
p
 
t
o
 
m
a
k
i
n
g
 
y
o
u
r
 
f
i
r
s
t
 
p
u
l
l
 
r
e
q
u
e
s
t
 
o
n
 
G
i
t
H
u
b
.
 
L
e
a
r
n
 
g
i
t
 
w
o
r
k
f
l
o
w
,
 
f
i
n
d
i
n
g
 
i
s
s
u
e
s
,
 
a
n
d
 
c
o
n
t
r
i
b
u
t
i
n
g
 
t
o
 
o
p
e
n
 
s
o
u
r
c
e
 
p
r
o
j
e
c
t
s
.
"


 
 
 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
"
f
i
r
s
t
 
p
u
l
l
 
r
e
q
u
e
s
t
,
 
o
p
e
n
 
s
o
u
r
c
e
 
c
o
n
t
r
i
b
u
t
i
o
n
,
 
G
i
t
H
u
b
 
b
e
g
i
n
n
e
r
,
 
g
i
t
 
w
o
r
k
f
l
o
w
,
 
c
o
n
t
r
i
b
u
t
e
 
t
o
 
o
p
e
n
 
s
o
u
r
c
e
"


 
 
 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
"
)
}


 
 
 
 
 
 
 
 
/
>




 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
i
x
e
d
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
-
z
-
1
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
-
t
o
p
-
3
2
 
-
r
i
g
h
t
-
3
2
 
w
-
1
5
0
 
h
-
1
5
0
 
b
g
-
i
n
d
i
g
o
-
1
0
0
 
d
a
r
k
:
b
g
-
i
n
d
i
g
o
-
9
0
0
/
2
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
3
2
 
-
l
e
f
t
-
3
2
 
w
-
1
2
5
 
h
-
1
2
5
 
b
g
-
s
l
a
t
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
l
a
t
e
-
9
0
0
/
2
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
0
"
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
c
e
n
t
e
r
 
m
b
-
1
0
 
m
t
-
6
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
x
-
a
u
t
o
 
h
-
1
2
 
w
-
9
6
 
m
a
x
-
w
-
f
u
l
l
 
r
o
u
n
d
e
d
-
2
x
l
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
a
n
i
m
a
t
e
-
p
u
l
s
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
x
-
a
u
t
o
 
m
t
-
4
 
h
-
6
 
w
-
[
2
8
r
e
m
]
 
m
a
x
-
w
-
f
u
l
l
 
r
o
u
n
d
e
d
-
x
l
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
a
n
i
m
a
t
e
-
p
u
l
s
e
"
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
4
 
m
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
4
 
}
)
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
p
-
5
 
t
e
x
t
-
c
e
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
x
-
a
u
t
o
 
m
b
-
3
 
h
-
6
 
w
-
6
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
a
n
i
m
a
t
e
-
p
u
l
s
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
x
-
a
u
t
o
 
h
-
8
 
w
-
1
6
 
r
o
u
n
d
e
d
-
l
g
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
a
n
i
m
a
t
e
-
p
u
l
s
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
x
-
a
u
t
o
 
m
t
-
3
 
h
-
3
 
w
-
1
2
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
a
n
i
m
a
t
e
-
p
u
l
s
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
1
0
 
}
)
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
p
x
-
5
 
p
y
-
5
 
r
o
u
n
d
e
d
-
2
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
0
 
w
-
1
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
a
n
i
m
a
t
e
-
p
u
l
s
e
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
m
i
n
-
w
-
0
 
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
h
-
5
 
w
-
f
u
l
l
 
m
a
x
-
w
-
m
d
 
r
o
u
n
d
e
d
-
l
g
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
a
n
i
m
a
t
e
-
p
u
l
s
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
h
-
4
 
w
-
3
/
4
 
r
o
u
n
d
e
d
-
l
g
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
a
n
i
m
a
t
e
-
p
u
l
s
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
h
-
4
 
w
-
4
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
a
n
i
m
a
t
e
-
p
u
l
s
e
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
c
o
n
s
t
 
h
o
w
T
o
S
c
h
e
m
a
 
=
 
{


 
 
 
 
"
@
c
o
n
t
e
x
t
"
:
 
"
h
t
t
p
s
:
/
/
s
c
h
e
m
a
.
o
r
g
"
,


 
 
 
 
"
@
t
y
p
e
"
:
 
"
H
o
w
T
o
"
,


 
 
 
 
"
n
a
m
e
"
:
 
"
F
i
r
s
t
 
P
u
l
l
 
R
e
q
u
e
s
t
 
G
u
i
d
e
 
-
 
O
p
e
n
 
S
o
u
r
c
e
 
f
o
r
 
B
e
g
i
n
n
e
r
s
"
,


 
 
 
 
"
d
e
s
c
r
i
p
t
i
o
n
"
:
 
"
S
t
e
p
-
b
y
-
s
t
e
p
 
r
o
a
d
m
a
p
 
t
o
 
m
a
k
i
n
g
 
y
o
u
r
 
f
i
r
s
t
 
p
u
l
l
 
r
e
q
u
e
s
t
 
o
n
 
G
i
t
H
u
b
.
 
L
e
a
r
n
 
g
i
t
 
w
o
r
k
f
l
o
w
,
 
f
i
n
d
i
n
g
 
i
s
s
u
e
s
,
 
a
n
d
 
c
o
n
t
r
i
b
u
t
i
n
g
 
t
o
 
o
p
e
n
 
s
o
u
r
c
e
 
p
r
o
j
e
c
t
s
.
"
,


 
 
 
 
"
e
s
t
i
m
a
t
e
d
C
o
s
t
"
:
 
{
 
"
@
t
y
p
e
"
:
 
"
M
o
n
e
t
a
r
y
A
m
o
u
n
t
"
,
 
"
c
u
r
r
e
n
c
y
"
:
 
"
U
S
D
"
,
 
"
v
a
l
u
e
"
:
 
"
0
"
 
}
,


 
 
 
 
"
t
o
t
a
l
T
i
m
e
"
:
 
`
P
T
$
{
S
T
E
P
S
.
r
e
d
u
c
e
(
(
s
u
m
,
 
s
)
 
=
>
 
s
u
m
 
+
 
(
s
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
 
|
|
 
0
)
,
 
0
)
}
M
`
,


 
 
 
 
"
s
t
e
p
"
:
 
S
T
E
P
S
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
(
{


 
 
 
 
 
 
"
@
t
y
p
e
"
:
 
"
H
o
w
T
o
S
t
e
p
"
,


 
 
 
 
 
 
"
p
o
s
i
t
i
o
n
"
:
 
i
 
+
 
1
,


 
 
 
 
 
 
"
n
a
m
e
"
:
 
s
.
t
i
t
l
e
,


 
 
 
 
 
 
"
t
e
x
t
"
:
 
s
.
d
e
s
c
r
i
p
t
i
o
n
 
|
|
 
"
F
o
l
l
o
w
 
t
h
e
 
v
i
s
u
a
l
 
w
a
l
k
t
h
r
o
u
g
h
 
s
t
e
p
s
.
"


 
 
 
 
}
)
)


 
 
}
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
p
b
-
1
2
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
F
i
r
s
t
 
P
u
l
l
 
R
e
q
u
e
s
t
 
G
u
i
d
e
 
-
 
O
p
e
n
 
S
o
u
r
c
e
 
f
o
r
 
B
e
g
i
n
n
e
r
s
"


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
"
S
t
e
p
-
b
y
-
s
t
e
p
 
r
o
a
d
m
a
p
 
t
o
 
m
a
k
i
n
g
 
y
o
u
r
 
f
i
r
s
t
 
p
u
l
l
 
r
e
q
u
e
s
t
 
o
n
 
G
i
t
H
u
b
.
 
L
e
a
r
n
 
g
i
t
 
w
o
r
k
f
l
o
w
,
 
f
i
n
d
i
n
g
 
i
s
s
u
e
s
,
 
a
n
d
 
c
o
n
t
r
i
b
u
t
i
n
g
 
t
o
 
o
p
e
n
 
s
o
u
r
c
e
 
p
r
o
j
e
c
t
s
.
"


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
"
f
i
r
s
t
 
p
u
l
l
 
r
e
q
u
e
s
t
,
 
o
p
e
n
 
s
o
u
r
c
e
 
c
o
n
t
r
i
b
u
t
i
o
n
,
 
G
i
t
H
u
b
 
b
e
g
i
n
n
e
r
,
 
g
i
t
 
w
o
r
k
f
l
o
w
,
 
c
o
n
t
r
i
b
u
t
e
 
t
o
 
o
p
e
n
 
s
o
u
r
c
e
"


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
"
)
}


 
 
 
 
 
 
 
 
o
g
I
m
a
g
e
=
"
/
o
g
/
o
g
-
f
i
r
s
t
-
p
r
.
p
n
g
"


 
 
 
 
 
 
 
 
s
t
r
u
c
t
u
r
e
d
D
a
t
a
=
{
h
o
w
T
o
S
c
h
e
m
a
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
{
/
*
 
A
t
m
o
s
p
h
e
r
i
c
 
b
a
c
k
g
r
o
u
n
d
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
i
x
e
d
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
-
z
-
1
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
-
t
o
p
-
3
2
 
-
r
i
g
h
t
-
3
2
 
w
-
1
5
0
 
h
-
1
5
0
 
b
g
-
i
n
d
i
g
o
-
1
0
0
 
d
a
r
k
:
b
g
-
i
n
d
i
g
o
-
9
0
0
/
2
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
0
"
 
/
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
3
2
 
-
l
e
f
t
-
3
2
 
w
-
1
2
5
 
h
-
1
2
5
 
b
g
-
s
l
a
t
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
l
a
t
e
-
9
0
0
/
2
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
0
"
 
/
>


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
o
p
a
c
i
t
y
-
[
0
.
0
2
]
 
d
a
r
k
:
o
p
a
c
i
t
y
-
[
0
.
0
3
]
"


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
I
m
a
g
e
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
c
u
r
r
e
n
t
C
o
l
o
r
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
1
p
x
)
,
 
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
9
0
d
e
g
,
 
c
u
r
r
e
n
t
C
o
l
o
r
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
1
p
x
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
S
i
z
e
:
 
"
4
8
p
x
 
4
8
p
x
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
2
0
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
6
,
 
e
a
s
e
:
 
[
0
.
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
c
e
n
t
e
r
 
m
b
-
1
0
 
m
t
-
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
h
1
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
d
i
s
p
l
a
y
 
t
e
x
t
-
4
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
g
r
a
y
-
9
5
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
Y
o
u
r
 
F
i
r
s
t
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
g
r
a
d
i
e
n
t
-
a
c
c
e
n
t
"
>
C
o
n
t
r
i
b
u
t
i
o
n
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
g
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
m
a
x
-
w
-
x
l
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
A
 
m
e
n
t
o
r
-
g
u
i
d
e
d
 
j
o
u
r
n
e
y
 
f
r
o
m
 
z
e
r
o
 
t
o
 
y
o
u
r
 
f
i
r
s
t
 
m
e
r
g
e
d
 
p
u
l
l
 
r
e
q
u
e
s
t


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
{
/
*
 
S
t
a
t
s
 
*
/
}


 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
2
0
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
,
 
d
e
l
a
y
:
 
0
.
1
 
}
}


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
4
 
m
b
-
8
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
G
i
t
P
u
l
l
R
e
q
u
e
s
t
,


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
:
 
t
o
t
a
l
S
t
e
p
s
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
S
t
e
p
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
C
o
l
o
r
:
 
"
t
e
x
t
-
i
n
d
i
g
o
-
5
0
0
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
C
h
e
c
k
C
i
r
c
l
e
2
,


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
:
 
c
o
m
p
l
e
t
e
d
.
s
i
z
e
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
C
o
m
p
l
e
t
e
d
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
C
o
l
o
r
:
 
"
t
e
x
t
-
g
r
e
e
n
-
5
0
0
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
T
r
o
p
h
y
,


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
:
 
`
$
{
p
c
t
}
%
`
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
P
r
o
g
r
e
s
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
C
o
l
o
r
:
 
"
t
e
x
t
-
a
m
b
e
r
-
5
0
0
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
A
r
r
o
w
R
i
g
h
t
,


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
:
 
a
l
l
D
o
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
D
o
n
e
!
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
c
o
m
p
l
e
t
e
d
.
s
i
z
e
 
>
 
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
`
$
{
r
e
m
a
i
n
i
n
g
M
i
n
u
t
e
s
}
 
m
i
n
 
l
e
f
t
`


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
`
$
{
t
o
t
a
l
E
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
}
 
m
i
n
 
t
o
t
a
l
`
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
E
s
t
.
 
T
i
m
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
C
o
l
o
r
:
 
"
t
e
x
t
-
i
n
d
i
g
o
-
5
0
0
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
s
t
a
t
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
t
a
t
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
s
c
a
l
e
:
 
0
.
9
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
s
c
a
l
e
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
e
l
a
y
:
 
0
.
1
 
+
 
i
 
*
 
0
.
0
8
,
 
d
u
r
a
t
i
o
n
:
 
0
.
4
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
p
-
5
 
t
e
x
t
-
c
e
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
a
t
.
i
c
o
n
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
6
 
h
-
6
 
$
{
s
t
a
t
.
i
c
o
n
C
o
l
o
r
}
 
m
x
-
a
u
t
o
 
m
b
-
3
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
d
i
s
p
l
a
y
 
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
5
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
f
o
n
t
-
m
e
d
i
u
m
 
m
t
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
{
/
*
 
C
o
m
p
l
e
t
i
o
n
 
b
a
n
n
e
r
 
*
/
}


 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
{
a
l
l
D
o
n
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
-
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
-
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
8
 
r
o
u
n
d
e
d
-
2
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
e
e
n
-
2
0
0
/
8
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
e
e
n
-
8
0
0
 
b
g
-
l
i
n
e
a
r
-
t
o
-
b
r
 
f
r
o
m
-
g
r
e
e
n
-
5
0
 
t
o
-
e
m
e
r
a
l
d
-
5
0
 
d
a
r
k
:
f
r
o
m
-
g
r
e
e
n
-
9
0
0
/
2
0
 
d
a
r
k
:
t
o
-
e
m
e
r
a
l
d
-
9
0
0
/
1
0
 
p
-
5
 
s
h
a
d
o
w
-
l
g
 
s
h
a
d
o
w
-
g
r
e
e
n
-
1
0
0
/
4
0
 
d
a
r
k
:
s
h
a
d
o
w
-
g
r
e
e
n
-
9
5
0
/
2
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
4
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
h
-
1
2
 
w
-
1
2
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
r
o
u
n
d
e
d
-
2
x
l
 
b
g
-
w
h
i
t
e
/
8
0
 
d
a
r
k
:
b
g
-
w
h
i
t
e
/
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
e
e
n
-
2
0
0
/
7
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
e
e
n
-
8
0
0
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
o
p
h
y
 
c
l
a
s
s
N
a
m
e
=
"
w
-
7
 
h
-
7
 
t
e
x
t
-
g
r
e
e
n
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
b
a
s
e
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
e
e
n
-
9
5
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
2
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
n
g
r
a
t
u
l
a
t
i
o
n
s
,
 
y
o
u
 
c
o
m
p
l
e
t
e
d
 
y
o
u
r
 
f
i
r
s
t
 
P
R
 
r
o
a
d
m
a
p
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
e
e
n
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
3
0
0
 
m
t
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
1
0
 
/
 
1
0
 
s
t
e
p
s
 
c
o
m
p
l
e
t
e
.
 
Y
o
u
 
a
r
e
 
r
e
a
d
y
 
t
o
 
c
o
n
t
r
i
b
u
t
e
 
w
i
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
f
i
d
e
n
c
e
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
g
a
p
-
4
 
m
t
-
3
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
u
n
d
e
r
l
i
n
e
 
f
o
n
t
-
m
e
d
i
u
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
i
s
c
o
v
e
r
 
r
e
p
o
s
 
t
o
 
c
o
n
t
r
i
b
u
t
e
 
t
o


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
S
h
o
w
R
e
s
e
t
C
o
n
f
i
r
m
(
t
r
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
p
x
-
3
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
-
l
g
 
f
o
n
t
-
m
e
d
i
u
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
t
a
r
t
 
o
v
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>




 
 
 
 
 
 
<
C
o
n
f
i
r
m
D
i
a
l
o
g


 
 
 
 
 
 
 
 
o
p
e
n
=
{
s
h
o
w
R
e
s
e
t
C
o
n
f
i
r
m
}


 
 
 
 
 
 
 
 
o
n
C
a
n
c
e
l
=
{
(
)
 
=
>
 
s
e
t
S
h
o
w
R
e
s
e
t
C
o
n
f
i
r
m
(
f
a
l
s
e
)
}


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
R
e
s
e
t
 
p
r
o
g
r
e
s
s
?
"


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
"
T
h
i
s
 
w
i
l
l
 
c
l
e
a
r
 
a
l
l
 
c
o
m
p
l
e
t
e
d
 
s
t
e
p
s
.
 
Y
o
u
r
 
s
e
r
v
e
r
-
s
i
d
e
 
p
r
o
g
r
e
s
s
 
w
i
l
l
 
b
e
 
r
e
s
e
t
.
"


 
 
 
 
 
 
 
 
c
o
n
f
i
r
m
L
a
b
e
l
=
"
R
e
s
e
t
"


 
 
 
 
 
 
 
 
c
o
n
f
i
r
m
V
a
r
i
a
n
t
=
"
d
a
n
g
e
r
"


 
 
 
 
 
 
 
 
o
n
C
o
n
f
i
r
m
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
o
R
e
s
e
t
 
=
 
A
r
r
a
y
.
f
r
o
m
(
c
o
m
p
l
e
t
e
d
)
;


 
 
 
 
 
 
 
 
 
 
s
e
t
C
o
m
p
l
e
t
e
d
(
n
e
w
 
S
e
t
(
)
)
;


 
 
 
 
 
 
 
 
 
 
t
o
R
e
s
e
t
.
f
o
r
E
a
c
h
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
v
o
i
d
 
p
a
t
c
h
F
i
r
s
t
P
R
P
r
o
g
r
e
s
s
(
i
d
,
 
f
a
l
s
e
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
.
t
h
e
n
(
(
)
 
=
>
 
n
o
t
i
f
y
L
e
a
r
n
i
n
g
P
a
t
h
P
r
o
g
r
e
s
s
C
h
a
n
g
e
d
(
)
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
.
c
a
t
c
h
(
(
)
 
=
>
 
{
}
)
;


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
{
/
*
 
S
e
c
t
i
o
n
 
C
a
r
d
s
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
{
S
T
E
P
S
.
m
a
p
(
(
s
t
e
p
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
o
n
e
 
=
 
c
o
m
p
l
e
t
e
d
.
h
a
s
(
s
t
e
p
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
n
P
r
o
g
r
e
s
s
 
=
 
!
d
o
n
e
 
&
&
 
c
u
r
r
e
n
t
S
t
e
p
?
.
i
d
 
=
=
=
 
s
t
e
p
.
i
d
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
t
e
p
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
e
l
a
y
:
 
0
.
1
5
 
+
 
i
 
*
 
0
.
0
4
,
 
d
u
r
a
t
i
o
n
:
 
0
.
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
/
$
{
s
t
e
p
.
i
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
g
r
o
u
p
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
4
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
p
x
-
5
 
p
y
-
5
 
r
o
u
n
d
e
d
-
2
x
l
 
b
o
r
d
e
r
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
d
u
r
a
t
i
o
n
-
3
0
0
 
n
o
-
u
n
d
e
r
l
i
n
e
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
o
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
g
r
e
e
n
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
e
e
n
-
8
0
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
l
g
 
h
o
v
e
r
:
s
h
a
d
o
w
-
g
r
e
e
n
-
1
0
0
/
5
0
 
d
a
r
k
:
h
o
v
e
r
:
s
h
a
d
o
w
-
g
r
e
e
n
-
9
0
0
/
2
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
x
l
 
h
o
v
e
r
:
s
h
a
d
o
w
-
g
r
a
y
-
2
0
0
/
5
0
 
d
a
r
k
:
h
o
v
e
r
:
s
h
a
d
o
w
-
g
r
a
y
-
9
0
0
/
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
t
e
p
 
n
u
m
b
e
r
 
/
 
c
h
e
c
k
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
e
=
"
i
c
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
g
g
l
e
(
s
t
e
p
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
s
h
r
i
n
k
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
o
n
e
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
e
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
 
t
e
x
t
-
g
r
e
e
n
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
5
 
h
-
5
 
r
o
u
n
d
e
d
-
f
u
l
l
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
P
r
o
g
r
e
s
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
i
n
d
i
g
o
-
1
0
0
 
d
a
r
k
:
b
g
-
i
n
d
i
g
o
-
9
0
0
/
4
0
 
r
i
n
g
-
2
 
r
i
n
g
-
i
n
d
i
g
o
-
4
0
0
/
6
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
P
r
o
g
r
e
s
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
t
e
x
t
-
i
n
d
i
g
o
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
i
n
d
i
g
o
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
s
t
e
p
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
t
e
n
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
f
l
e
x
-
w
r
a
p
 
m
b
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
o
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
l
i
n
e
-
t
h
r
o
u
g
h
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
t
e
x
t
-
g
r
a
y
-
9
5
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
o
n
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
p
x
-
1
.
5
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
 
b
g
-
g
r
e
e
n
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
e
e
n
-
9
0
0
/
3
0
 
t
e
x
t
-
g
r
e
e
n
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
m
p
l
e
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
n
P
r
o
g
r
e
s
s
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
p
x
-
1
.
5
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
 
b
g
-
i
n
d
i
g
o
-
1
0
0
 
d
a
r
k
:
b
g
-
i
n
d
i
g
o
-
9
0
0
/
3
0
 
t
e
x
t
-
i
n
d
i
g
o
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
i
n
d
i
g
o
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
n
 
P
r
o
g
r
e
s
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
d
o
n
e
 
&
&
 
!
i
n
P
r
o
g
r
e
s
s
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
p
x
-
1
.
5
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
U
p
c
o
m
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
~
{
s
t
e
p
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
}
 
m
i
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
l
i
n
e
-
c
l
a
m
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
d
e
s
c
r
i
p
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
r
r
o
w
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
R
i
g
h
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
g
r
a
y
-
3
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
6
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
1
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
N
e
x
t
I
n
P
a
t
h
C
a
r
d
 
c
u
r
r
e
n
t
S
l
u
g
=
"
f
i
r
s
t
-
p
r
"
 
c
o
m
p
l
e
t
e
d
=
{
a
l
l
D
o
n
e
}
 
/
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


