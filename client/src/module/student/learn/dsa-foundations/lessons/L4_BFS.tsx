
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
M
e
m
o
,
 
u
s
e
S
t
a
t
e
 
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
 
B
o
o
k
O
p
e
n
,
 
C
o
d
e
2
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
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
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


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
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
A
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


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
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
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
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
I
n
l
i
n
e
C
o
d
e
,


 
 
L
e
d
e
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


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
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
e
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
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
"
g
r
a
p
h
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
y
p
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
N
o
d
e
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
"
 
|
 
"
f
r
o
n
t
i
e
r
"
 
|
 
"
a
c
t
i
v
e
"
 
|
 
"
d
o
n
e
"
;




i
n
t
e
r
f
a
c
e
 
B
F
S
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
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
>
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
n
o
d
e
S
t
a
t
e
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
N
o
d
e
S
t
a
t
e
>
;


 
 
n
o
d
e
D
i
s
t
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
 
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
>
;


 
 
t
r
e
e
E
d
g
e
s
:
 
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
;


 
 
q
u
e
u
e
:
 
s
t
r
i
n
g
[
]
;


 
 
f
l
a
s
h
K
e
y
?
:
 
s
t
r
i
n
g
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
P
a
r
s
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
p
a
r
s
e
E
d
g
e
L
i
s
t
(
i
n
p
u
t
:
 
s
t
r
i
n
g
)
:
 
{
 
n
o
d
e
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
;
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
 
}
[
]
 
}
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
t
o
k
e
n
s
 
=
 
i
n
p
u
t
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
(
t
)
 
=
>
 
t
.
t
r
i
m
(
)
)
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
;


 
 
i
f
 
(
t
o
k
e
n
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
c
o
n
s
t
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
 
}
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
i
d
s
 
=
 
n
e
w
 
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
(
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
t
o
k
 
o
f
 
t
o
k
e
n
s
)
 
{


 
 
 
 
c
o
n
s
t
 
m
 
=
 
t
o
k
.
m
a
t
c
h
(
/
^
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
[
-
:
]
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
$
/
)
;


 
 
 
 
i
f
 
(
!
m
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
e
d
g
e
s
.
p
u
s
h
(
{
 
f
r
o
m
:
 
m
[
1
]
,
 
t
o
:
 
m
[
2
]
 
}
)
;


 
 
 
 
i
d
s
.
a
d
d
(
m
[
1
]
)
;


 
 
 
 
i
d
s
.
a
d
d
(
m
[
2
]
)
;


 
 
}


 
 
r
e
t
u
r
n
 
{
 
n
o
d
e
I
d
s
:
 
[
.
.
.
i
d
s
]
.
s
o
r
t
(
)
,
 
e
d
g
e
s
 
}
;


}




f
u
n
c
t
i
o
n
 
a
u
t
o
L
a
y
o
u
t
(
i
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
,
 
c
x
 
=
 
3
0
0
,
 
c
y
 
=
 
1
5
0
,
 
r
 
=
 
1
1
0
)
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
{


 
 
c
o
n
s
t
 
o
u
t
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
n
 
=
 
i
d
s
.
l
e
n
g
t
h
;


 
 
i
d
s
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
 
a
n
g
 
=
 
(
2
 
*
 
M
a
t
h
.
P
I
 
*
 
i
)
 
/
 
M
a
t
h
.
m
a
x
(
1
,
 
n
)
 
-
 
M
a
t
h
.
P
I
 
/
 
2
;


 
 
 
 
o
u
t
[
i
d
]
 
=
 
{
 
x
:
 
c
x
 
+
 
r
 
*
 
M
a
t
h
.
c
o
s
(
a
n
g
)
,
 
y
:
 
c
y
 
+
 
r
 
*
 
M
a
t
h
.
s
i
n
(
a
n
g
)
 
}
;


 
 
}
)
;


 
 
r
e
t
u
r
n
 
o
u
t
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
B
F
S
 
F
r
a
m
e
 
b
u
i
l
d
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
P
S
E
U
D
O
 
=
 
[


 
 
"
B
F
S
(
G
,
 
s
)
:
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
v
 
i
n
 
V
:
 
d
i
s
t
[
v
]
 
←
 
∞
"
,


 
 
"
 
 
d
i
s
t
[
s
]
 
←
 
0
"
,


 
 
"
 
 
Q
 
←
 
e
m
p
t
y
 
q
u
e
u
e
"
,


 
 
"
 
 
e
n
q
u
e
u
e
(
Q
,
 
s
)
"
,


 
 
"
 
 
w
h
i
l
e
 
Q
 
n
o
t
 
e
m
p
t
y
:
"
,


 
 
"
 
 
 
 
u
 
←
 
d
e
q
u
e
u
e
(
Q
)
"
,


 
 
"
 
 
 
 
f
o
r
 
e
a
c
h
 
n
e
i
g
h
b
o
r
 
v
 
o
f
 
u
:
"
,


 
 
"
 
 
 
 
 
 
i
f
 
d
i
s
t
[
v
]
 
=
 
∞
:
"
,


 
 
"
 
 
 
 
 
 
 
 
d
i
s
t
[
v
]
 
←
 
d
i
s
t
[
u
]
 
+
 
1
"
,


 
 
"
 
 
 
 
 
 
 
 
p
a
r
e
n
t
[
v
]
 
←
 
u
"
,


 
 
"
 
 
 
 
 
 
 
 
e
n
q
u
e
u
e
(
Q
,
 
v
)
"
,


]
;




f
u
n
c
t
i
o
n
 
b
u
i
l
d
B
F
S
F
r
a
m
e
s
(


 
 
i
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
,


 
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
 
}
[
]
,


 
 
s
o
u
r
c
e
:
 
s
t
r
i
n
g
,


)
:
 
B
F
S
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
:
 
B
F
S
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
i
f
 
(
!
i
d
s
.
i
n
c
l
u
d
e
s
(
s
o
u
r
c
e
)
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
}
,
 
m
e
s
s
a
g
e
:
 
`
S
o
u
r
c
e
 
'
$
{
s
o
u
r
c
e
}
'
 
n
o
t
 
i
n
 
g
r
a
p
h
`
,
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,
 
n
o
d
e
D
i
s
t
:
 
{
}
,
 
t
r
e
e
E
d
g
e
s
:
 
n
e
w
 
S
e
t
(
)
,
 
q
u
e
u
e
:
 
[
]
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
f
;


 
 
}


 
 
c
o
n
s
t
 
a
d
j
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
[
]
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
[
]
]
)
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
e
 
o
f
 
e
d
g
e
s
)
 
{
 
a
d
j
[
e
.
f
r
o
m
]
.
p
u
s
h
(
e
.
t
o
)
;
 
a
d
j
[
e
.
t
o
]
.
p
u
s
h
(
e
.
f
r
o
m
)
;
 
}


 
 
f
o
r
 
(
c
o
n
s
t
 
i
d
 
o
f
 
i
d
s
)
 
a
d
j
[
i
d
]
.
s
o
r
t
(
)
;




 
 
c
o
n
s
t
 
d
i
s
t
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
 
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
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
u
n
d
e
f
i
n
e
d
]
)
)
;


 
 
c
o
n
s
t
 
s
t
a
t
e
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
N
o
d
e
S
t
a
t
e
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
"
d
e
f
a
u
l
t
"
]
)
)
;


 
 
c
o
n
s
t
 
t
r
e
e
E
d
g
e
s
 
=
 
n
e
w
 
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
(
)
;




 
 
c
o
n
s
t
 
c
l
o
n
e
F
 
=
 
(
p
a
t
c
h
:
 
P
a
r
t
i
a
l
<
B
F
S
F
r
a
m
e
>
,
 
q
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
:
 
B
F
S
F
r
a
m
e
 
=
>
 
(
{


 
 
 
 
l
i
n
e
:
 
p
a
t
c
h
.
l
i
n
e
 
?
?
 
0
,


 
 
 
 
v
a
r
s
:
 
p
a
t
c
h
.
v
a
r
s
 
?
?
 
{
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
p
a
t
c
h
.
m
e
s
s
a
g
e
 
?
?
 
"
"
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
.
.
.
s
t
a
t
e
 
}
,


 
 
 
 
n
o
d
e
D
i
s
t
:
 
{
 
.
.
.
d
i
s
t
 
}
,


 
 
 
 
t
r
e
e
E
d
g
e
s
:
 
n
e
w
 
S
e
t
(
t
r
e
e
E
d
g
e
s
)
,


 
 
 
 
q
u
e
u
e
:
 
[
.
.
.
q
]
,


 
 
 
 
f
l
a
s
h
K
e
y
:
 
p
a
t
c
h
.
f
l
a
s
h
K
e
y
,


 
 
}
)
;




 
 
f
.
p
u
s
h
(
c
l
o
n
e
F
(
{
 
l
i
n
e
:
 
1
,
 
m
e
s
s
a
g
e
:
 
"
S
e
t
 
d
i
s
t
[
v
]
 
=
 
∞
 
f
o
r
 
e
v
e
r
y
 
v
e
r
t
e
x
.
"
 
}
,
 
[
]
)
)
;


 
 
d
i
s
t
[
s
o
u
r
c
e
]
 
=
 
0
;


 
 
f
.
p
u
s
h
(
c
l
o
n
e
F
(
{
 
l
i
n
e
:
 
2
,
 
m
e
s
s
a
g
e
:
 
`
S
e
t
 
d
i
s
t
[
s
o
u
r
c
e
=
$
{
s
o
u
r
c
e
}
]
 
=
 
0
.
`
,
 
f
l
a
s
h
K
e
y
:
 
s
o
u
r
c
e
 
}
,
 
[
]
)
)
;




 
 
c
o
n
s
t
 
Q
:
 
s
t
r
i
n
g
[
]
 
=
 
[
s
o
u
r
c
e
]
;


 
 
s
t
a
t
e
[
s
o
u
r
c
e
]
 
=
 
"
f
r
o
n
t
i
e
r
"
;


 
 
f
.
p
u
s
h
(
c
l
o
n
e
F
(
{
 
l
i
n
e
:
 
4
,
 
m
e
s
s
a
g
e
:
 
`
E
n
q
u
e
u
e
 
s
o
u
r
c
e
 
$
{
s
o
u
r
c
e
}
.
`
,
 
v
a
r
s
:
 
{
 
u
:
 
"
-
"
,
 
"
|
Q
|
"
:
 
Q
.
l
e
n
g
t
h
 
}
 
}
,
 
[
.
.
.
Q
]
)
)
;




 
 
w
h
i
l
e
 
(
Q
.
l
e
n
g
t
h
)
 
{


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
F
(
{
 
l
i
n
e
:
 
5
,
 
m
e
s
s
a
g
e
:
 
"
Q
u
e
u
e
 
n
o
t
 
e
m
p
t
y
,
 
c
o
n
t
i
n
u
e
.
"
,
 
v
a
r
s
:
 
{
 
"
|
Q
|
"
:
 
Q
.
l
e
n
g
t
h
 
}
 
}
,
 
[
.
.
.
Q
]
)
)
;


 
 
 
 
c
o
n
s
t
 
u
 
=
 
Q
.
s
h
i
f
t
(
)
!
;


 
 
 
 
s
t
a
t
e
[
u
]
 
=
 
"
a
c
t
i
v
e
"
;


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
F
(
{
 
l
i
n
e
:
 
6
,
 
m
e
s
s
a
g
e
:
 
`
D
e
q
u
e
u
e
 
u
 
=
 
$
{
u
}
.
 
M
a
r
k
 
a
c
t
i
v
e
.
`
,
 
v
a
r
s
:
 
{
 
u
,
 
"
|
Q
|
"
:
 
Q
.
l
e
n
g
t
h
,
 
[
`
d
i
s
t
[
$
{
u
}
]
`
]
:
 
d
i
s
t
[
u
]
 
?
?
 
"
∞
"
 
}
 
}
,
 
[
.
.
.
Q
]
)
)
;




 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
v
 
o
f
 
a
d
j
[
u
]
)
 
{


 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
F
(
{
 
l
i
n
e
:
 
7
,
 
m
e
s
s
a
g
e
:
 
`
L
o
o
k
 
a
t
 
n
e
i
g
h
b
o
r
 
$
{
v
}
 
o
f
 
$
{
u
}
.
`
,
 
v
a
r
s
:
 
{
 
u
,
 
v
,
 
[
`
d
i
s
t
[
$
{
v
}
]
`
]
:
 
d
i
s
t
[
v
]
 
?
?
 
"
∞
"
 
}
 
}
,
 
[
.
.
.
Q
]
)
)
;


 
 
 
 
 
 
i
f
 
(
d
i
s
t
[
v
]
 
=
=
=
 
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
 
{


 
 
 
 
 
 
 
 
d
i
s
t
[
v
]
 
=
 
(
d
i
s
t
[
u
]
 
?
?
 
0
)
 
+
 
1
;


 
 
 
 
 
 
 
 
s
t
a
t
e
[
v
]
 
=
 
"
f
r
o
n
t
i
e
r
"
;


 
 
 
 
 
 
 
 
t
r
e
e
E
d
g
e
s
.
a
d
d
(
`
$
{
u
}
-
$
{
v
}
`
)
;


 
 
 
 
 
 
 
 
Q
.
p
u
s
h
(
v
)
;


 
 
 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
F
(
{
 
l
i
n
e
:
 
9
,
 
m
e
s
s
a
g
e
:
 
`
d
i
s
t
[
$
{
v
}
]
 
w
a
s
 
∞
,
 
s
e
t
 
d
i
s
t
[
$
{
v
}
]
 
=
 
$
{
d
i
s
t
[
v
]
}
.
`
,
 
f
l
a
s
h
K
e
y
:
 
v
,
 
v
a
r
s
:
 
{
 
u
,
 
v
,
 
[
`
d
i
s
t
[
$
{
v
}
]
`
]
:
 
d
i
s
t
[
v
]
 
}
 
}
,
 
[
.
.
.
Q
]
)
)
;


 
 
 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
F
(
{
 
l
i
n
e
:
 
1
1
,
 
m
e
s
s
a
g
e
:
 
`
E
n
q
u
e
u
e
 
$
{
v
}
.
`
,
 
v
a
r
s
:
 
{
 
u
,
 
v
,
 
"
|
Q
|
"
:
 
Q
.
l
e
n
g
t
h
 
}
 
}
,
 
[
.
.
.
Q
]
)
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
F
(
{
 
l
i
n
e
:
 
8
,
 
m
e
s
s
a
g
e
:
 
`
d
i
s
t
[
$
{
v
}
]
 
a
l
r
e
a
d
y
 
s
e
t
 
(
$
{
d
i
s
t
[
v
]
}
)
.
 
S
k
i
p
.
`
,
 
v
a
r
s
:
 
{
 
u
,
 
v
,
 
[
`
d
i
s
t
[
$
{
v
}
]
`
]
:
 
d
i
s
t
[
v
]
 
}
 
}
,
 
[
.
.
.
Q
]
)
)
;


 
 
 
 
 
 
}


 
 
 
 
}




 
 
 
 
s
t
a
t
e
[
u
]
 
=
 
"
d
o
n
e
"
;


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
F
(
{
 
l
i
n
e
:
 
5
,
 
m
e
s
s
a
g
e
:
 
`
F
i
n
i
s
h
e
d
 
p
r
o
c
e
s
s
i
n
g
 
$
{
u
}
.
`
,
 
v
a
r
s
:
 
{
 
u
,
 
"
|
Q
|
"
:
 
Q
.
l
e
n
g
t
h
 
}
 
}
,
 
[
.
.
.
Q
]
)
)
;


 
 
}




 
 
f
.
p
u
s
h
(
c
l
o
n
e
F
(
{
 
l
i
n
e
:
 
5
,
 
m
e
s
s
a
g
e
:
 
"
Q
u
e
u
e
 
e
m
p
t
y
,
 
B
F
S
 
c
o
m
p
l
e
t
e
.
 
D
i
s
t
a
n
c
e
s
 
l
a
b
e
l
e
d
 
o
n
 
e
v
e
r
y
 
r
e
a
c
h
a
b
l
e
 
v
e
r
t
e
x
.
"
,
 
v
a
r
s
:
 
{
}
 
}
,
 
[
]
)
)
;


 
 
r
e
t
u
r
n
 
f
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
l
i
n
e
 
g
r
a
p
h
 
S
V
G
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
N
O
D
E
_
S
T
A
T
E
_
C
O
L
O
R
:
 
R
e
c
o
r
d
<
N
o
d
e
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
,


 
 
f
r
o
n
t
i
e
r
:
 
"
#
0
6
b
6
d
4
"
,


 
 
a
c
t
i
v
e
:
 
"
#
3
b
8
2
f
6
"
,


 
 
d
o
n
e
:
 
"
#
6
4
7
4
8
b
"
,


}
;




f
u
n
c
t
i
o
n
 
G
r
a
p
h
S
V
G
(
{


 
 
i
d
s
,


 
 
e
d
g
e
s
,


 
 
p
o
s
,


 
 
f
r
a
m
e
,


}
:
 
{


 
 
i
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
;


 
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
 
}
[
]
;


 
 
p
o
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
;


 
 
f
r
a
m
e
:
 
B
F
S
F
r
a
m
e
;


}
)
 
{


 
 
c
o
n
s
t
 
W
 
=
 
6
0
0
;


 
 
c
o
n
s
t
 
H
 
=
 
3
0
0
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
w
-
f
u
l
l
 
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
 
r
o
u
n
d
e
d
-
m
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
-
5
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
t
o
n
e
-
9
5
0
"
>


 
 
 
 
 
 
<
s
v
g
 
w
i
d
t
h
=
{
W
}
 
h
e
i
g
h
t
=
{
H
}
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
W
}
 
$
{
H
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
"
b
l
o
c
k
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
{
e
d
g
e
s
.
m
a
p
(
(
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
1
 
=
 
p
o
s
[
e
.
f
r
o
m
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
2
 
=
 
p
o
s
[
e
.
t
o
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
1
 
|
|
 
!
p
2
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
T
r
e
e
 
=
 
f
r
a
m
e
.
t
r
e
e
E
d
g
e
s
.
h
a
s
(
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
)
 
|
|
 
f
r
a
m
e
.
t
r
e
e
E
d
g
e
s
.
h
a
s
(
`
$
{
e
.
t
o
}
-
$
{
e
.
f
r
o
m
}
`
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
p
1
.
x
}
 
y
1
=
{
p
1
.
y
}
 
x
2
=
{
p
2
.
x
}
 
y
2
=
{
p
2
.
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
i
s
T
r
e
e
 
?
 
"
#
f
b
b
f
2
4
"
 
:
 
T
H
E
M
E
.
b
o
r
d
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
i
s
T
r
e
e
 
?
 
2
.
5
 
:
 
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
 
=
 
p
o
s
[
i
d
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
s
 
=
 
f
r
a
m
e
.
n
o
d
e
S
t
a
t
e
s
[
i
d
]
 
?
?
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
i
l
l
 
=
 
N
O
D
E
_
S
T
A
T
E
_
C
O
L
O
R
[
n
s
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
 
=
 
f
r
a
m
e
.
n
o
d
e
D
i
s
t
[
i
d
]
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
{
p
.
x
}
 
c
y
=
{
p
.
y
}
 
r
=
{
2
0
}
 
f
i
l
l
=
{
f
i
l
l
}
 
s
t
r
o
k
e
=
{
T
H
E
M
E
.
b
o
r
d
e
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
.
x
}
 
y
=
{
p
.
y
 
+
 
1
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
d
o
m
i
n
a
n
t
B
a
s
e
l
i
n
e
=
"
m
i
d
d
l
e
"
 
f
o
n
t
S
i
z
e
=
"
1
3
"
 
f
i
l
l
=
"
#
f
f
f
"
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
h
e
a
d
i
n
g
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
.
x
 
+
 
1
4
}
 
y
=
{
p
.
y
 
-
 
1
4
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
S
i
z
e
=
"
1
1
"
 
f
i
l
l
=
{
T
H
E
M
E
.
a
c
c
e
n
t
}
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
s
v
g
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
l
i
n
e
 
Q
u
e
u
e
V
i
z
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
Q
u
e
u
e
V
i
z
(
{
 
i
t
e
m
s
 
}
:
 
{
 
i
t
e
m
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
 
}
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
.
5
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
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
/
 
b
f
s
 
q
u
e
u
e


 
 
 
 
 
 
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
f
l
e
x
 
g
a
p
-
1
.
5
 
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
 
m
i
n
-
h
-
8
 
p
-
2
 
r
o
u
n
d
e
d
-
m
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
-
5
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
t
o
n
e
-
9
0
0
"
>


 
 
 
 
 
 
 
 
{
i
t
e
m
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
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
x
s
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
i
t
a
l
i
c
"
>
e
m
p
t
y
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
i
t
e
m
s
.
m
a
p
(
(
v
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
i
n
l
i
n
e
-
b
l
o
c
k
 
p
x
-
2
.
5
 
p
y
-
1
 
r
o
u
n
d
e
d
-
m
d
 
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
 
f
o
n
t
-
b
o
l
d
 
b
o
r
d
e
r
 
$
{
i
 
=
=
=
 
0
 
?
 
"
b
g
-
c
y
a
n
-
5
0
0
 
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
 
b
o
r
d
e
r
-
c
y
a
n
-
5
0
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
c
y
a
n
-
3
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
c
y
a
n
-
7
0
0
 
t
e
x
t
-
c
y
a
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
c
y
a
n
-
3
0
0
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
)
)


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
i
t
e
m
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
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
f
l
e
x
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
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
m
o
n
o
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
d
e
q
u
e
u
e
 
↑
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
↑
 
e
n
q
u
e
u
e
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
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
r
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
"
A
-
B
,
 
A
-
C
,
 
B
-
D
,
 
C
-
D
,
 
C
-
E
,
 
D
-
F
,
 
E
-
F
,
 
F
-
G
"
)
;


 
 
c
o
n
s
t
 
[
s
o
u
r
c
e
,
 
s
e
t
S
o
u
r
c
e
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
"
A
"
)
;


 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
p
a
r
s
e
E
d
g
e
L
i
s
t
(
i
n
p
u
t
S
t
r
)
,
 
[
i
n
p
u
t
S
t
r
]
)
;


 
 
c
o
n
s
t
 
i
d
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
p
a
r
s
e
d
?
.
n
o
d
e
I
d
s
 
?
?
 
[
]
,
 
[
p
a
r
s
e
d
?
.
n
o
d
e
I
d
s
]
)
;


 
 
c
o
n
s
t
 
e
d
g
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
p
a
r
s
e
d
?
.
e
d
g
e
s
 
?
?
 
[
]
,
 
[
p
a
r
s
e
d
?
.
e
d
g
e
s
]
)
;




 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
b
u
i
l
d
B
F
S
F
r
a
m
e
s
(
i
d
s
,
 
e
d
g
e
s
,
 
s
o
u
r
c
e
)
,
 
[
i
d
s
,
 
e
d
g
e
s
,
 
s
o
u
r
c
e
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
c
o
n
s
t
 
p
o
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
a
u
t
o
L
a
y
o
u
t
(
i
d
s
)
,
 
[
i
d
s
]
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
{
`
B
F
S
 
f
r
o
m
 
$
{
s
o
u
r
c
e
}
`
}


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
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
e
n
d
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
-
1
 
m
i
n
-
w
-
6
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
E
d
g
e
s
 
(
A
-
B
,
 
B
-
C
,
 
.
.
.
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
S
t
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
A
-
B
,
 
A
-
C
,
 
B
-
D
,
 
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
U
n
d
i
r
e
c
t
e
d
 
e
d
g
e
s
.
 
U
s
e
 
a
 
l
e
t
t
e
r
/
i
d
 
o
n
 
e
a
c
h
 
s
i
d
e
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
h
a
i
n
"
,
 
v
a
l
u
e
:
 
"
A
-
B
,
 
B
-
C
,
 
C
-
D
,
 
D
-
E
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
G
r
i
d
"
,
 
v
a
l
u
e
:
 
"
A
-
B
,
 
A
-
C
,
 
B
-
D
,
 
C
-
D
,
 
C
-
E
,
 
D
-
F
,
 
E
-
F
,
 
F
-
G
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
T
r
e
e
"
,
 
v
a
l
u
e
:
 
"
A
-
B
,
 
A
-
C
,
 
B
-
D
,
 
B
-
E
,
 
C
-
F
,
 
C
-
G
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
y
c
l
e
"
,
 
v
a
l
u
e
:
 
"
A
-
B
,
 
B
-
C
,
 
C
-
D
,
 
D
-
A
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
E
d
g
e
L
i
s
t
(
v
)
)
 
s
e
t
I
n
p
u
t
S
t
r
(
v
)
;
 
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
/
 
s
o
u
r
c
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
o
u
r
c
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
S
o
u
r
c
e
(
e
.
t
a
r
g
e
t
.
v
a
l
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
p
x
-
3
 
p
y
-
1
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
m
d
 
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
s
t
o
n
e
-
3
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
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
-
5
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
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
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
s
t
o
n
e
-
1
0
0
 
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
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
<
o
p
t
i
o
n
 
k
e
y
=
{
i
d
}
 
v
a
l
u
e
=
{
i
d
}
>
{
i
d
}
<
/
o
p
t
i
o
n
>
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
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


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
f
l
a
s
h
K
e
y
 
?
 
[
`
d
i
s
t
[
$
{
f
r
a
m
e
.
f
l
a
s
h
K
e
y
}
]
`
,
 
"
v
"
]
 
:
 
[
]
}
 
/
>
}


 
 
 
 
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
G
r
a
p
h
S
V
G
 
i
d
s
=
{
i
d
s
}
 
e
d
g
e
s
=
{
e
d
g
e
s
}
 
p
o
s
=
{
p
o
s
}
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
}


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
Q
u
e
u
e
V
i
z
 
i
t
e
m
s
=
{
f
r
a
m
e
.
q
u
e
u
e
}
 
/
>
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
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
{
[
[
"
#
3
b
8
2
f
6
"
,
 
"
a
c
t
i
v
e
"
]
,
 
[
"
#
0
6
b
6
d
4
"
,
 
"
f
r
o
n
t
i
e
r
 
(
i
n
 
q
u
e
u
e
)
"
]
,
 
[
"
#
6
4
7
4
8
b
"
,
 
"
v
i
s
i
t
e
d
 
(
d
o
n
e
)
"
]
,
 
[
"
#
f
b
b
f
2
4
"
,
 
"
B
F
S
 
t
r
e
e
 
e
d
g
e
"
]
]
.
m
a
p
(
(
[
c
,
 
l
]
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
k
e
y
=
{
l
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
i
n
l
i
n
e
-
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
1
"
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
"
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
2
.
5
 
h
-
2
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
s
m
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
:
 
c
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
C
a
l
l
o
u
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
f
u
l
l
"
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
 
B
F
S
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
B
F
S
 
i
n
 
o
n
e
 
l
i
n
e
"
,
 
b
o
d
y
:
 
"
E
x
p
l
o
r
e
 
t
h
e
 
g
r
a
p
h
 
i
n
 
w
a
v
e
f
r
o
n
t
 
o
r
d
e
r
:
 
f
i
r
s
t
 
a
l
l
 
v
e
r
t
i
c
e
s
 
a
t
 
d
i
s
t
a
n
c
e
 
1
 
f
r
o
m
 
t
h
e
 
s
o
u
r
c
e
,
 
t
h
e
n
 
d
i
s
t
a
n
c
e
 
2
,
 
t
h
e
n
 
d
i
s
t
a
n
c
e
 
3
,
 
u
s
i
n
g
 
a
 
F
I
F
O
 
q
u
e
u
e
 
t
o
 
h
o
l
d
 
t
h
e
 
n
e
x
t
 
f
r
o
n
t
i
e
r
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
C
o
r
r
e
c
t
n
e
s
s
 
i
n
v
a
r
i
a
n
t
"
,
 
b
o
d
y
:
 
"
W
h
e
n
 
a
 
v
e
r
t
e
x
 
i
s
 
d
e
q
u
e
u
e
d
,
 
i
t
s
 
d
i
s
t
[
v
]
 
e
q
u
a
l
s
 
t
h
e
 
t
r
u
e
 
s
h
o
r
t
e
s
t
 
d
i
s
t
a
n
c
e
 
(
i
n
 
n
u
m
b
e
r
 
o
f
 
e
d
g
e
s
)
 
f
r
o
m
 
t
h
e
 
s
o
u
r
c
e
.
 
R
e
a
s
o
n
:
 
w
e
 
e
n
q
u
e
u
e
 
i
n
 
n
o
n
-
d
e
c
r
e
a
s
i
n
g
 
o
r
d
e
r
 
o
f
 
d
i
s
t
a
n
c
e
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
C
o
m
p
l
e
x
i
t
y
"
,
 
b
o
d
y
:
 
"
E
a
c
h
 
v
e
r
t
e
x
 
i
s
 
e
n
q
u
e
u
e
d
 
a
n
d
 
d
e
q
u
e
u
e
d
 
o
n
c
e
,
 
O
(
V
)
.
 
W
e
 
s
c
a
n
 
e
a
c
h
 
a
d
j
a
c
e
n
c
y
 
l
i
s
t
 
o
n
c
e
,
 
t
o
t
a
l
 
w
o
r
k
 
O
(
E
)
.
 
O
v
e
r
a
l
l
 
O
(
V
 
+
 
E
)
 
w
i
t
h
 
a
d
j
a
c
e
n
c
y
 
l
i
s
t
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
C
l
a
s
s
i
c
 
u
s
e
s
"
,
 
b
o
d
y
:
 
"
S
h
o
r
t
e
s
t
 
p
a
t
h
 
i
n
 
u
n
w
e
i
g
h
t
e
d
 
g
r
a
p
h
s
,
 
l
e
v
e
l
-
o
r
d
e
r
 
t
r
e
e
 
t
r
a
v
e
r
s
a
l
,
 
f
i
n
d
i
n
g
 
c
o
n
n
e
c
t
e
d
 
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
,
 
b
i
p
a
r
t
i
t
e
n
e
s
s
 
t
e
s
t
,
 
w
e
b
 
c
r
a
w
l
i
n
g
.
"
 
}
,


 
 
]
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
m
e
n
t
a
l
 
m
o
d
e
l
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
D
r
o
p
 
a
 
p
e
b
b
l
e
.
 
W
a
t
c
h
 
t
h
e
 
r
i
p
p
l
e
s
 
s
p
r
e
a
d
 
l
a
y
e
r
 
b
y
 
l
a
y
e
r
.
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
D
r
o
p
 
a
 
p
e
b
b
l
e
 
i
n
t
o
 
w
a
t
e
r
 
a
t
 
t
h
e
 
s
o
u
r
c
e
.
 
T
h
e
 
r
i
p
p
l
e
s
 
s
p
r
e
a
d
 
o
u
t
w
a
r
d
s
 
i
n
 
r
i
n
g
s
.
 
E
a
c
h
 
r
i
n
g
 
i
s


 
 
 
 
 
 
 
 
 
 
a
 
"
l
a
y
e
r
"
,
 
e
v
e
r
y
 
n
o
d
e
 
i
n
 
r
i
n
g
 
k
 
i
s
 
e
x
a
c
t
l
y
 
k
 
e
d
g
e
s
 
f
r
o
m
 
t
h
e
 
s
o
u
r
c
e
.
 
T
h
a
t
 
i
s
 
B
F
S
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
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
1
 
s
m
:
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
2
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
s
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


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
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
m
o
n
o
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
0
{
i
 
+
 
1
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
s
m
 
t
e
x
t
-
s
t
o
n
e
-
9
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
s
t
o
n
e
-
5
0
 
m
b
-
1
"
>
{
s
.
t
i
t
l
e
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
s
.
b
o
d
y
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
I
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
F
o
r
 
e
a
c
h
 
p
r
o
m
p
t
,
 
t
r
a
c
e
 
B
F
S
 
b
y
 
h
a
n
d
 
i
n
 
t
h
e
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
w
i
t
h
 
t
h
e
 
g
i
v
e
n
 
s
o
u
r
c
e
 
t
o
 
v
e
r
i
f
y
.


 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
"
O
n
 
t
h
e
 
C
h
a
i
n
 
p
r
e
s
e
t
 
(
A
-
B
,
 
B
-
C
,
 
C
-
D
,
 
D
-
E
)
 
f
r
o
m
 
A
,
 
w
h
a
t
 
i
s
 
d
i
s
t
[
E
]
?
 
 
(
E
x
p
e
c
t
e
d
:
 
4
)
"
,


 
 
 
 
 
 
 
 
"
O
n
 
t
h
e
 
G
r
i
d
 
p
r
e
s
e
t
 
f
r
o
m
 
A
,
 
w
h
i
c
h
 
v
e
r
t
e
x
 
h
a
s
 
t
h
e
 
l
a
r
g
e
s
t
 
d
i
s
t
?
 
 
(
E
x
p
e
c
t
e
d
:
 
G
,
 
d
i
s
t
 
4
)
"
,


 
 
 
 
 
 
 
 
"
O
n
 
a
 
c
y
c
l
e
 
o
f
 
4
 
f
r
o
m
 
A
,
 
t
h
e
 
m
a
x
 
d
i
s
t
 
i
s
?
 
 
(
E
x
p
e
c
t
e
d
:
 
2
)
"
,


 
 
 
 
 
 
]
.
m
a
p
(
(
q
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
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
s
m
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
2
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
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
"
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
"
>
#
{
i
 
+
 
1
}
<
/
s
p
a
n
>
 
{
q
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
C
a
r
d
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


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
W
h
y
 
a
 
q
u
e
u
e
 
(
n
o
t
 
a
 
s
t
a
c
k
)
?
<
/
S
u
b
H
e
a
d
i
n
g
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
F
I
F
O
 
p
r
e
s
e
r
v
e
s
 
t
h
e
 
l
a
y
e
r
 
o
r
d
e
r
.
 
T
h
e
 
f
i
r
s
t
 
t
i
m
e
 
a
 
v
e
r
t
e
x
 
i
s
 
d
i
s
c
o
v
e
r
e
d
 
i
s
 
a
l
w
a
y
s
 
v
i
a
 
t
h
e


 
 
 
 
 
 
 
 
 
 
s
h
o
r
t
e
s
t
 
p
a
t
h
,
 
b
e
c
a
u
s
e
 
t
h
e
 
q
u
e
u
e
 
a
l
w
a
y
s
 
h
o
l
d
s
 
a
 
m
i
x
 
o
f
 
l
a
y
e
r
 
k
 
a
n
d
 
l
a
y
e
r
 
k
+
1
 
n
o
d
e
s
,
 
w
i
t
h


 
 
 
 
 
 
 
 
 
 
a
l
l
 
l
a
y
e
r
-
k
 
n
o
d
e
s
 
i
n
 
f
r
o
n
t
.
 
R
e
p
l
a
c
e
 
t
h
e
 
q
u
e
u
e
 
w
i
t
h
 
a
 
s
t
a
c
k
 
a
n
d
 
y
o
u
 
g
e
t
 
D
F
S
,
 
w
h
e
r
e
 
s
h
o
r
t
e
s
t


 
 
 
 
 
 
 
 
 
 
p
a
t
h
s
 
a
r
e
 
n
o
t
 
g
u
a
r
a
n
t
e
e
d
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
I
n
t
e
r
v
i
e
w
 
p
i
t
f
a
l
l
s
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
u
l
 
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
l
i
s
t
-
d
i
s
c
 
p
l
-
5
 
s
p
a
c
e
-
y
-
1
.
5
 
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
B
F
S
 
s
h
o
r
t
e
s
t
 
p
a
t
h
 
w
o
r
k
s
 
o
n
l
y
 
f
o
r
 
<
s
t
r
o
n
g
 
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
t
o
n
e
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
s
t
o
n
e
-
2
0
0
"
>
u
n
w
e
i
g
h
t
e
d
<
/
s
t
r
o
n
g
>
 
g
r
a
p
h
s
 
(
o
r
 
a
l
l
-
e
q
u
a
l
 
w
e
i
g
h
t
s
)
.
 
F
o
r
 
w
e
i
g
h
t
e
d
,
 
u
s
e
 
D
i
j
k
s
t
r
a
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
A
l
w
a
y
s
 
m
a
r
k
 
a
 
v
e
r
t
e
x
 
"
v
i
s
i
t
e
d
"
 
a
t
 
e
n
q
u
e
u
e
 
t
i
m
e
,
 
n
o
t
 
d
e
q
u
e
u
e
,
 
e
l
s
e
 
i
t
 
e
n
t
e
r
s
 
t
h
e
 
q
u
e
u
e
 
m
u
l
t
i
p
l
e
 
t
i
m
e
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
N
u
m
b
e
r
 
o
f
 
B
F
S
 
t
r
e
e
 
e
d
g
e
s
 
=
 
V
 
−
 
1
 
(
f
o
r
 
c
o
n
n
e
c
t
e
d
 
g
r
a
p
h
)
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
S
t
d
l
i
b
 
q
u
e
u
e
 
c
h
o
i
c
e
 
a
n
d
 
t
h
e
 
P
y
t
h
o
n
 
<
I
n
l
i
n
e
C
o
d
e
>
l
i
s
t
.
p
o
p
(
0
)
<
/
I
n
l
i
n
e
C
o
d
e
>
 
t
r
a
p
<
/
S
u
b
H
e
a
d
i
n
g
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
P
y
t
h
o
n
:
 
<
I
n
l
i
n
e
C
o
d
e
>
c
o
l
l
e
c
t
i
o
n
s
.
d
e
q
u
e
<
/
I
n
l
i
n
e
C
o
d
e
>
 
w
i
t
h
 
<
I
n
l
i
n
e
C
o
d
e
>
a
p
p
e
n
d
<
/
I
n
l
i
n
e
C
o
d
e
>
 
+
 
<
I
n
l
i
n
e
C
o
d
e
>
p
o
p
l
e
f
t
<
/
I
n
l
i
n
e
C
o
d
e
>
,
 
b
o
t
h
 
O
(
1
)
.
 
N
e
v
e
r
 
u
s
e
 
<
I
n
l
i
n
e
C
o
d
e
>
l
i
s
t
.
p
o
p
(
0
)
<
/
I
n
l
i
n
e
C
o
d
e
>
:
 
i
t
 
s
h
i
f
t
s
 
e
v
e
r
y
 
o
t
h
e
r
 
e
l
e
m
e
n
t
 
d
o
w
n
,
 
m
a
k
i
n
g
 
B
F
S
 
O
(
V
·
E
)
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
J
a
v
a
:
 
<
I
n
l
i
n
e
C
o
d
e
>
A
r
r
a
y
D
e
q
u
e
<
/
I
n
l
i
n
e
C
o
d
e
>
.
 
C
+
+
:
 
<
I
n
l
i
n
e
C
o
d
e
>
s
t
d
:
:
q
u
e
u
e
<
/
I
n
l
i
n
e
C
o
d
e
>
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
0
-
1
 
B
F
S
,
 
D
i
j
k
s
t
r
a
 
s
h
o
r
t
c
u
t
 
f
o
r
 
b
i
n
a
r
y
 
w
e
i
g
h
t
s
<
/
S
u
b
H
e
a
d
i
n
g
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
W
h
e
n
 
e
d
g
e
 
w
e
i
g
h
t
s
 
a
r
e
 
r
e
s
t
r
i
c
t
e
d
 
t
o
 
{
"
{
0
,
 
1
}
"
}
,
 
u
s
e
 
a
 
d
e
q
u
e
:
 
p
u
s
h
F
r
o
n
t
 
o
n
 
w
e
i
g
h
t
-
0
 
e
d
g
e
s
,


 
 
 
 
 
 
 
 
 
 
p
u
s
h
B
a
c
k
 
o
n
 
w
e
i
g
h
t
-
1
 
e
d
g
e
s
.
 
S
a
m
e
 
c
o
r
r
e
c
t
n
e
s
s
 
a
s
 
D
i
j
k
s
t
r
a
 
a
t
 
O
(
V
+
E
)
 
i
n
s
t
e
a
d
 
o
f
 
O
(
E
 
l
o
g
 
V
)
.


 
 
 
 
 
 
 
 
 
 
C
o
m
m
o
n
 
o
n
 
g
r
i
d
s
 
w
h
e
r
e
 
s
o
m
e
 
m
o
v
e
s
 
a
r
e
 
f
r
e
e
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
;


}




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
 
L
4
_
B
F
S
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
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
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
"
p
r
a
c
t
i
c
e
"
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
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
C
o
d
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
4
 
h
-
4
"
 
/
>
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
B
F
S
 
f
i
n
d
s
 
s
h
o
r
t
e
s
t
 
p
a
t
h
s
 
i
n
 
w
h
i
c
h
 
k
i
n
d
 
o
f
 
g
r
a
p
h
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
W
e
i
g
h
t
e
d
 
w
i
t
h
 
n
o
n
-
n
e
g
a
t
i
v
e
 
e
d
g
e
s
"
,


 
 
 
 
 
 
 
 
"
U
n
w
e
i
g
h
t
e
d
 
(
o
r
 
u
n
i
f
o
r
m
-
w
e
i
g
h
t
)
"
,


 
 
 
 
 
 
 
 
"
D
A
G
s
 
o
n
l
y
"
,


 
 
 
 
 
 
 
 
"
A
n
y
 
g
r
a
p
h
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
B
F
S
 
t
r
e
a
t
s
 
e
v
e
r
y
 
e
d
g
e
 
a
s
 
h
a
v
i
n
g
 
c
o
s
t
 
1
.
 
F
o
r
 
w
e
i
g
h
t
e
d
 
g
r
a
p
h
s
,
 
d
i
s
t
a
n
c
e
 
i
n
 
e
d
g
e
s
 
≠
 
t
r
u
e
 
s
h
o
r
t
e
s
t
 
d
i
s
t
a
n
c
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
T
i
m
e
 
c
o
m
p
l
e
x
i
t
y
 
o
f
 
B
F
S
 
o
n
 
a
 
g
r
a
p
h
 
w
i
t
h
 
V
 
v
e
r
t
i
c
e
s
 
a
n
d
 
E
 
e
d
g
e
s
 
u
s
i
n
g
 
a
d
j
a
c
e
n
c
y
 
l
i
s
t
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
V
 
l
o
g
 
V
)
"
,
 
"
O
(
V
²
)
"
,
 
"
O
(
V
 
+
 
E
)
"
,
 
"
O
(
E
 
l
o
g
 
V
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
E
a
c
h
 
v
e
r
t
e
x
 
e
n
q
u
e
u
e
d
/
d
e
q
u
e
u
e
d
 
o
n
c
e
 
(
V
 
w
o
r
k
)
;
 
e
a
c
h
 
e
d
g
e
 
s
c
a
n
n
e
d
 
o
n
c
e
 
(
E
 
w
o
r
k
)
.
 
T
o
t
a
l
 
O
(
V
 
+
 
E
)
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
T
o
 
a
v
o
i
d
 
a
 
v
e
r
t
e
x
 
b
e
i
n
g
 
e
n
q
u
e
u
e
d
 
m
u
l
t
i
p
l
e
 
t
i
m
e
s
,
 
w
e
 
s
h
o
u
l
d
 
m
a
r
k
 
i
t
 
v
i
s
i
t
e
d
 
w
h
e
n
…
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
D
e
q
u
e
u
i
n
g
 
i
t
"
,


 
 
 
 
 
 
 
 
"
E
n
q
u
e
u
i
n
g
 
i
t
"
,


 
 
 
 
 
 
 
 
"
S
t
a
r
t
i
n
g
 
t
h
e
 
a
l
g
o
r
i
t
h
m
"
,


 
 
 
 
 
 
 
 
"
A
f
t
e
r
 
p
r
o
c
e
s
s
i
n
g
 
a
l
l
 
n
e
i
g
h
b
o
r
s
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
M
a
r
k
 
a
t
 
e
n
q
u
e
u
e
 
t
i
m
e
.
 
O
t
h
e
r
w
i
s
e
,
 
b
e
t
w
e
e
n
 
e
n
q
u
e
u
e
 
a
n
d
 
d
e
q
u
e
u
e
,
 
a
 
s
i
b
l
i
n
g
 
c
o
u
l
d
 
r
e
-
e
n
q
u
e
u
e
 
t
h
e
 
s
a
m
e
 
n
o
d
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
R
u
n
 
B
F
S
 
f
r
o
m
 
A
 
o
n
 
A
-
B
,
 
B
-
C
,
 
C
-
D
,
 
D
-
E
,
 
E
-
A
 
(
a
 
5
-
c
y
c
l
e
)
.
 
d
i
s
t
[
C
]
 
=
 
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
1
"
,
 
"
2
"
,
 
"
3
"
,
 
"
4
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
A
→
B
→
C
 
i
s
 
l
e
n
g
t
h
 
2
,
 
A
→
E
→
D
→
C
 
i
s
 
l
e
n
g
t
h
 
3
.
 
B
F
S
 
p
i
c
k
s
 
t
h
e
 
s
h
o
r
t
e
r
:
 
2
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
B
r
e
a
d
t
h
-
F
i
r
s
t
 
S
e
a
r
c
h
 
(
B
F
S
)
"


 
 
 
 
 
 
l
e
v
e
l
=
{
4
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
2
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
V
e
r
y
 
h
i
g
h
,
 
a
s
k
e
d
 
i
n
 
a
l
m
o
s
t
 
e
v
e
r
y
 
g
r
a
p
h
 
i
n
t
e
r
v
i
e
w
.
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
D
e
p
t
h
-
F
i
r
s
t
 
S
e
a
r
c
h
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


