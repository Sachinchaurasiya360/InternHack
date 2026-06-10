
i
m
p
o
r
t
 
t
y
p
e
 
{
 
C
o
m
p
o
n
e
n
t
T
y
p
e
,
 
L
a
z
y
E
x
o
t
i
c
C
o
m
p
o
n
e
n
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
 
l
a
z
y
 
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




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
L
e
s
s
o
n
E
n
t
r
y
 
{


 
 
s
l
u
g
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


 
 
s
u
m
m
a
r
y
:
 
s
t
r
i
n
g
;


 
 
l
o
a
d
:
 
L
a
z
y
E
x
o
t
i
c
C
o
m
p
o
n
e
n
t
<
C
o
m
p
o
n
e
n
t
T
y
p
e
<
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
 
}
>
>
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
L
e
v
e
l
E
n
t
r
y
 
{


 
 
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


 
 
n
u
m
b
e
r
:
 
n
u
m
b
e
r
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


 
 
s
u
m
m
a
r
y
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
p
i
c
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


 
 
l
e
s
s
o
n
s
:
 
L
e
s
s
o
n
E
n
t
r
y
[
]
;


}




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
 
L
E
V
E
L
S
:
 
L
e
v
e
l
E
n
t
r
y
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
v
e
l
-
1
"
,


 
 
 
 
n
u
m
b
e
r
:
 
1
,


 
 
 
 
t
i
t
l
e
:
 
"
F
o
u
n
d
a
t
i
o
n
s
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
W
h
a
t
 
S
y
s
t
e
m
 
D
e
s
i
g
n
 
a
c
t
u
a
l
l
y
 
i
s
,
 
h
o
w
 
H
L
D
 
a
n
d
 
L
L
D
 
d
i
f
f
e
r
,
 
a
n
d
 
t
h
e
 
f
r
a
m
e
w
o
r
k
 
y
o
u
 
u
s
e
 
i
n
 
e
v
e
r
y
 
a
r
c
h
i
t
e
c
t
u
r
e
 
r
o
u
n
d
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
s
c
o
p
e
"
,
 
"
h
l
d
"
,
 
"
l
l
d
"
,
 
"
r
e
q
u
i
r
e
m
e
n
t
s
"
,
 
"
f
r
a
m
e
w
o
r
k
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
i
o
n
"
,
 
"
d
i
a
g
r
a
m
s
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
w
h
a
t
-
i
s
-
s
y
s
t
e
m
-
d
e
s
i
g
n
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
W
h
a
t
 
i
s
 
S
y
s
t
e
m
 
D
e
s
i
g
n
?
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
W
h
e
r
e
 
S
y
s
t
e
m
 
D
e
s
i
g
n
 
s
i
t
s
 
b
e
t
w
e
e
n
 
D
S
A
 
a
n
d
 
o
p
e
r
a
t
i
o
n
s
,
 
w
h
a
t
 
i
t
 
a
c
t
u
a
l
l
y
 
m
e
a
n
s
 
a
s
 
a
 
d
i
s
c
i
p
l
i
n
e
,
 
a
n
d
 
w
h
e
r
e
 
i
t
 
s
h
o
w
s
 
u
p
 
i
n
 
i
n
t
e
r
v
i
e
w
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
1
_
W
h
a
t
I
s
S
y
s
t
e
m
D
e
s
i
g
n
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
h
l
d
-
v
s
-
l
l
d
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
H
L
D
 
v
s
 
L
L
D
 
-
 
T
h
e
 
T
w
o
 
L
e
n
s
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
H
i
g
h
-
l
e
v
e
l
 
a
r
c
h
i
t
e
c
t
u
r
e
 
v
s
 
l
o
w
-
l
e
v
e
l
 
c
l
a
s
s
 
d
e
s
i
g
n
.
 
T
w
o
 
d
i
s
t
i
n
c
t
 
i
n
t
e
r
v
i
e
w
 
r
o
u
n
d
s
 
t
e
s
t
e
d
 
a
t
 
e
v
e
r
y
 
p
r
o
d
u
c
t
 
c
o
m
p
a
n
y
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
1
_
H
L
D
v
s
L
L
D
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
r
e
q
u
i
r
e
m
e
n
t
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
F
u
n
c
t
i
o
n
a
l
 
v
s
 
N
o
n
-
F
u
n
c
t
i
o
n
a
l
 
R
e
q
u
i
r
e
m
e
n
t
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
R
e
a
d
 
t
h
e
 
p
r
o
m
p
t
 
b
e
f
o
r
e
 
d
r
a
w
i
n
g
 
b
o
x
e
s
.
 
F
u
n
c
t
i
o
n
a
l
 
a
s
k
s
 
'
w
h
a
t
'
,
 
n
o
n
-
f
u
n
c
t
i
o
n
a
l
 
a
s
k
s
 
'
h
o
w
 
w
e
l
l
'
 
(
l
a
t
e
n
c
y
,
 
t
h
r
o
u
g
h
p
u
t
,
 
a
v
a
i
l
a
b
i
l
i
t
y
)
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
1
_
R
e
q
u
i
r
e
m
e
n
t
s
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
e
s
i
g
n
-
f
r
a
m
e
w
o
r
k
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
T
h
e
 
4
-
S
t
e
p
 
D
e
s
i
g
n
 
F
r
a
m
e
w
o
r
k
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
R
e
q
u
i
r
e
m
e
n
t
s
 
→
 
E
s
t
i
m
a
t
i
o
n
 
→
 
A
P
I
 
+
 
d
a
t
a
 
m
o
d
e
l
 
→
 
H
i
g
h
-
l
e
v
e
l
 
d
i
a
g
r
a
m
.
 
T
h
e
 
l
i
t
e
r
a
l
 
s
t
r
u
c
t
u
r
e
 
o
f
 
a
 
4
5
-
m
i
n
 
H
L
D
 
r
o
u
n
d
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
1
_
D
e
s
i
g
n
F
r
a
m
e
w
o
r
k
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
a
r
c
h
i
t
e
c
t
u
r
e
-
d
i
a
g
r
a
m
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
r
a
w
i
n
g
 
A
r
c
h
i
t
e
c
t
u
r
e
 
D
i
a
g
r
a
m
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
B
o
x
e
s
,
 
a
r
r
o
w
s
,
 
a
n
d
 
t
h
e
 
s
m
a
l
l
 
s
e
t
 
o
f
 
c
o
n
v
e
n
t
i
o
n
s
 
t
h
a
t
 
m
a
k
e
 
a
 
w
h
i
t
e
b
o
a
r
d
 
d
i
a
g
r
a
m
 
r
e
a
d
a
b
l
e
 
u
n
d
e
r
 
i
n
t
e
r
v
i
e
w
 
p
r
e
s
s
u
r
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
1
_
A
r
c
h
i
t
e
c
t
u
r
e
D
i
a
g
r
a
m
s
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
b
a
c
k
-
o
f
-
e
n
v
e
l
o
p
e
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
B
a
c
k
-
o
f
-
E
n
v
e
l
o
p
e
 
E
s
t
i
m
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
F
e
r
m
i
 
m
a
t
h
 
f
o
r
 
Q
P
S
,
 
s
t
o
r
a
g
e
,
 
a
n
d
 
b
a
n
d
w
i
d
t
h
.
 
T
h
e
 
n
u
m
b
e
r
s
 
t
h
a
t
 
j
u
s
t
i
f
y
 
e
v
e
r
y
 
c
o
m
p
o
n
e
n
t
 
y
o
u
 
d
r
a
w
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
1
_
B
a
c
k
O
f
E
n
v
e
l
o
p
e
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
2
"
,


 
 
 
 
n
u
m
b
e
r
:
 
2
,


 
 
 
 
t
i
t
l
e
:
 
"
N
e
t
w
o
r
k
i
n
g
 
&
 
S
c
a
l
i
n
g
 
P
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
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
H
o
w
 
a
 
r
e
q
u
e
s
t
 
a
c
t
u
a
l
l
y
 
r
e
a
c
h
e
s
 
y
o
u
r
 
s
e
r
v
e
r
,
 
a
n
d
 
t
h
e
 
b
u
i
l
d
i
n
g
 
b
l
o
c
k
s
 
(
l
o
a
d
 
b
a
l
a
n
c
e
r
s
,
 
c
a
c
h
e
s
,
 
s
t
a
t
e
l
e
s
s
n
e
s
s
)
 
t
h
a
t
 
l
e
t
 
i
t
 
s
e
r
v
e
 
m
i
l
l
i
o
n
s
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
h
t
t
p
"
,
 
"
d
n
s
"
,
 
"
s
c
a
l
i
n
g
"
,
 
"
l
o
a
d
-
b
a
l
a
n
c
i
n
g
"
,
 
"
s
t
a
t
e
l
e
s
s
"
,
 
"
c
a
c
h
i
n
g
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
c
l
i
e
n
t
-
s
e
r
v
e
r
-
h
t
t
p
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
C
l
i
e
n
t
-
S
e
r
v
e
r
 
&
 
H
T
T
P
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
R
e
q
u
e
s
t
-
r
e
s
p
o
n
s
e
,
 
m
e
t
h
o
d
s
,
 
s
t
a
t
u
s
 
c
o
d
e
s
,
 
a
n
d
 
t
h
e
 
h
e
a
d
e
r
s
 
e
v
e
r
y
 
w
e
b
 
s
y
s
t
e
m
 
i
n
t
e
r
v
i
e
w
 
a
s
s
u
m
e
s
 
y
o
u
 
k
n
o
w
 
c
o
l
d
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
2
_
C
l
i
e
n
t
S
e
r
v
e
r
H
T
T
P
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
n
s
-
j
o
u
r
n
e
y
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
N
S
 
&
 
T
h
e
 
J
o
u
r
n
e
y
 
o
f
 
a
 
R
e
q
u
e
s
t
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
T
h
e
 
c
l
a
s
s
i
c
 
'
w
h
a
t
 
h
a
p
p
e
n
s
 
w
h
e
n
 
y
o
u
 
t
y
p
e
 
g
o
o
g
l
e
.
c
o
m
'
 
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
:
 
r
e
s
o
l
v
e
r
,
 
r
o
o
t
,
 
T
L
D
,
 
a
u
t
h
o
r
i
t
a
t
i
v
e
,
 
T
C
P
,
 
T
L
S
,
 
H
T
T
P
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
2
_
D
N
S
J
o
u
r
n
e
y
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
s
c
a
l
i
n
g
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
V
e
r
t
i
c
a
l
 
v
s
 
H
o
r
i
z
o
n
t
a
l
 
S
c
a
l
i
n
g
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
B
i
g
g
e
r
 
b
o
x
 
v
s
 
m
o
r
e
 
b
o
x
e
s
.
 
T
h
e
 
t
r
a
d
e
 
y
o
u
 
m
a
k
e
 
f
i
r
s
t
 
i
n
 
a
n
y
 
c
a
p
a
c
i
t
y
-
p
l
a
n
n
i
n
g
 
d
i
s
c
u
s
s
i
o
n
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
2
_
S
c
a
l
i
n
g
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
l
o
a
d
-
b
a
l
a
n
c
i
n
g
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
L
o
a
d
 
B
a
l
a
n
c
i
n
g
 
B
a
s
i
c
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
L
4
 
v
s
 
L
7
,
 
r
o
u
n
d
-
r
o
b
i
n
 
v
s
 
l
e
a
s
t
-
c
o
n
n
e
c
t
i
o
n
s
,
 
h
e
a
l
t
h
 
c
h
e
c
k
s
,
 
a
n
d
 
t
h
e
 
f
i
r
s
t
 
b
o
x
 
y
o
u
 
d
r
a
w
 
a
f
t
e
r
 
t
h
e
 
c
l
i
e
n
t
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
2
_
L
o
a
d
B
a
l
a
n
c
i
n
g
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
s
t
a
t
e
l
e
s
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
S
t
a
t
e
l
e
s
s
 
v
s
 
S
t
a
t
e
f
u
l
 
S
e
r
v
i
c
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
T
h
e
 
h
i
d
d
e
n
 
p
r
e
c
o
n
d
i
t
i
o
n
 
t
h
a
t
 
m
a
k
e
s
 
h
o
r
i
z
o
n
t
a
l
 
s
c
a
l
i
n
g
 
a
c
t
u
a
l
l
y
 
w
o
r
k
.
 
W
h
e
r
e
 
s
t
a
t
e
 
g
o
e
s
 
w
h
e
n
 
s
e
r
v
e
r
s
 
c
a
n
n
o
t
 
h
o
l
d
 
i
t
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
2
_
S
t
a
t
e
l
e
s
s
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
c
a
c
h
i
n
g
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
C
a
c
h
i
n
g
 
1
0
1
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
B
r
o
w
s
e
r
,
 
C
D
N
,
 
a
p
p
,
 
a
n
d
 
D
B
 
c
a
c
h
e
s
.
 
H
i
t
/
m
i
s
s
,
 
e
v
i
c
t
i
o
n
 
p
o
l
i
c
i
e
s
,
 
i
n
v
a
l
i
d
a
t
i
o
n
,
 
a
n
d
 
'
h
o
w
 
d
o
 
y
o
u
 
m
a
k
e
 
t
h
i
s
 
f
a
s
t
e
r
?
'
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
2
_
C
a
c
h
i
n
g
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
3
"
,


 
 
 
 
n
u
m
b
e
r
:
 
3
,


 
 
 
 
t
i
t
l
e
:
 
"
D
a
t
a
 
&
 
P
e
r
s
i
s
t
e
n
c
e
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
W
h
e
r
e
 
s
t
a
t
e
 
l
i
v
e
s
 
o
n
c
e
 
y
o
u
 
c
a
n
 
n
o
 
l
o
n
g
e
r
 
f
i
t
 
i
t
 
o
n
 
o
n
e
 
m
a
c
h
i
n
e
.
 
R
e
l
a
t
i
o
n
a
l
 
v
s
 
d
o
c
u
m
e
n
t
 
s
h
a
p
e
s
,
 
r
e
p
l
i
c
a
t
i
o
n
,
 
a
n
d
 
s
h
a
r
d
i
n
g
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
s
q
l
"
,
 
"
n
o
s
q
l
"
,
 
"
r
e
p
l
i
c
a
t
i
o
n
"
,
 
"
s
h
a
r
d
i
n
g
"
,
 
"
c
o
n
s
i
s
t
e
n
c
y
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
s
q
l
-
v
s
-
n
o
s
q
l
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
S
Q
L
 
v
s
 
N
o
S
Q
L
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
S
a
m
e
 
d
a
t
a
,
 
t
w
o
 
s
h
a
p
e
s
.
 
W
a
t
c
h
 
a
 
u
s
e
r
 
r
e
c
o
r
d
 
m
o
r
p
h
 
b
e
t
w
e
e
n
 
a
 
r
e
l
a
t
i
o
n
a
l
 
r
o
w
 
a
n
d
 
a
 
d
o
c
u
m
e
n
t
,
 
a
n
d
 
l
e
a
r
n
 
w
h
e
n
 
e
a
c
h
 
o
n
e
 
w
i
n
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
3
_
S
Q
L
v
s
N
o
S
Q
L
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
r
e
p
l
i
c
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
a
t
a
b
a
s
e
 
R
e
p
l
i
c
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
A
n
i
m
a
t
e
d
 
w
r
i
t
e
 
f
a
n
-
o
u
t
 
f
r
o
m
 
p
r
i
m
a
r
y
 
t
o
 
r
e
p
l
i
c
a
s
,
 
r
e
p
l
i
c
a
 
l
a
g
,
 
a
n
d
 
w
h
a
t
 
f
a
i
l
o
v
e
r
 
a
c
t
u
a
l
l
y
 
l
o
o
k
s
 
l
i
k
e
 
u
n
d
e
r
 
l
o
a
d
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
3
_
R
e
p
l
i
c
a
t
i
o
n
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
s
h
a
r
d
i
n
g
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
S
h
a
r
d
i
n
g
 
&
 
P
a
r
t
i
t
i
o
n
i
n
g
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
C
o
n
s
i
s
t
e
n
t
 
h
a
s
h
i
n
g
 
o
n
 
a
 
r
i
n
g
,
 
t
h
e
 
r
e
b
a
l
a
n
c
e
 
d
a
n
c
e
 
w
h
e
n
 
s
h
a
r
d
s
 
a
r
e
 
a
d
d
e
d
,
 
a
n
d
 
w
h
y
 
h
o
t
 
s
h
a
r
d
s
 
s
t
i
l
l
 
b
i
t
e
 
y
o
u
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
3
_
S
h
a
r
d
i
n
g
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
i
n
d
e
x
e
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
I
n
d
e
x
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
B
-
t
r
e
e
 
d
r
i
l
l
d
o
w
n
 
a
n
i
m
a
t
i
o
n
.
 
R
a
c
e
 
a
 
f
u
l
l
 
t
a
b
l
e
 
s
c
a
n
 
a
g
a
i
n
s
t
 
a
n
 
i
n
d
e
x
 
s
e
e
k
 
a
n
d
 
s
e
e
 
w
h
y
 
e
v
e
r
y
 
i
n
t
e
r
v
i
e
w
 
a
n
s
w
e
r
 
i
n
v
o
l
v
e
s
 
t
h
e
 
m
a
g
i
c
 
w
o
r
d
 
I
N
D
E
X
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
3
_
I
n
d
e
x
e
s
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
t
r
a
n
s
a
c
t
i
o
n
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
T
r
a
n
s
a
c
t
i
o
n
s
 
&
 
A
C
I
D
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
T
w
o
 
c
o
n
c
u
r
r
e
n
t
 
t
r
a
n
s
a
c
t
i
o
n
s
 
o
n
 
a
 
p
a
r
a
l
l
e
l
 
t
i
m
e
l
i
n
e
.
 
S
l
i
d
e
 
t
h
e
 
i
s
o
l
a
t
i
o
n
 
l
e
v
e
l
 
—
 
d
i
r
t
y
 
r
e
a
d
s
,
 
n
o
n
-
r
e
p
e
a
t
a
b
l
e
 
r
e
a
d
s
,
 
a
n
d
 
p
h
a
n
t
o
m
 
r
e
a
d
s
 
f
l
i
c
k
e
r
 
i
n
t
o
 
e
x
i
s
t
e
n
c
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
3
_
T
r
a
n
s
a
c
t
i
o
n
s
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
c
o
n
s
i
s
t
e
n
c
y
-
s
p
e
c
t
r
u
m
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
T
h
e
 
C
o
n
s
i
s
t
e
n
c
y
 
S
p
e
c
t
r
u
m
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
E
v
e
n
t
u
a
l
 
→
 
r
e
a
d
-
y
o
u
r
-
w
r
i
t
e
s
 
→
 
m
o
n
o
t
o
n
i
c
 
→
 
l
i
n
e
a
r
i
z
a
b
l
e
.
 
S
l
i
d
e
 
t
h
e
 
c
o
n
s
i
s
t
e
n
c
y
 
k
n
o
b
 
a
n
d
 
w
a
t
c
h
 
w
h
a
t
 
r
e
a
d
s
 
r
e
t
u
r
n
 
f
r
o
m
 
a
 
3
-
r
e
p
l
i
c
a
 
c
l
u
s
t
e
r
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
3
_
C
o
n
s
i
s
t
e
n
c
y
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
4
"
,


 
 
 
 
n
u
m
b
e
r
:
 
4
,


 
 
 
 
t
i
t
l
e
:
 
"
D
i
s
t
r
i
b
u
t
e
d
 
S
y
s
t
e
m
s
 
F
u
n
d
a
m
e
n
t
a
l
s
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
T
h
e
 
v
o
c
a
b
u
l
a
r
y
 
o
f
 
d
i
s
t
r
i
b
u
t
e
d
 
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
.
 
C
A
P
,
 
c
o
n
s
e
n
s
u
s
,
 
q
u
o
r
u
m
s
,
 
v
e
c
t
o
r
 
c
l
o
c
k
s
,
 
d
i
s
t
r
i
b
u
t
e
d
 
t
r
a
n
s
a
c
t
i
o
n
s
,
 
a
n
d
 
i
d
e
m
p
o
t
e
n
c
y
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
c
a
p
"
,
 
"
c
o
n
s
e
n
s
u
s
"
,
 
"
r
a
f
t
"
,
 
"
q
u
o
r
u
m
"
,
 
"
v
e
c
t
o
r
-
c
l
o
c
k
s
"
,
 
"
2
p
c
"
,
 
"
s
a
g
a
"
,
 
"
i
d
e
m
p
o
t
e
n
c
y
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
c
a
p
-
t
h
e
o
r
e
m
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
T
h
e
 
C
A
P
 
T
h
e
o
r
e
m
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
C
o
n
s
i
s
t
e
n
c
y
,
 
a
v
a
i
l
a
b
i
l
i
t
y
,
 
p
a
r
t
i
t
i
o
n
 
t
o
l
e
r
a
n
c
e
 
—
 
p
i
c
k
 
t
w
o
.
 
D
r
a
g
 
t
h
e
 
p
a
r
t
i
t
i
o
n
 
c
u
t
 
a
n
d
 
w
a
t
c
h
 
a
 
s
y
s
t
e
m
 
f
l
i
p
 
b
e
t
w
e
e
n
 
C
P
 
a
n
d
 
A
P
 
m
o
d
e
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
4
_
C
A
P
T
h
e
o
r
e
m
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
c
o
n
s
e
n
s
u
s
-
r
a
f
t
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
C
o
n
s
e
n
s
u
s
 
&
 
L
e
a
d
e
r
 
E
l
e
c
t
i
o
n
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
F
i
v
e
 
n
o
d
e
s
 
e
l
e
c
t
i
n
g
 
a
 
l
e
a
d
e
r
,
 
r
e
p
l
i
c
a
t
i
n
g
 
l
o
g
s
,
 
a
n
d
 
r
e
c
o
v
e
r
i
n
g
 
a
f
t
e
r
 
t
h
e
 
l
e
a
d
e
r
 
d
i
e
s
.
 
T
h
e
 
R
a
f
t
 
p
r
o
t
o
c
o
l
,
 
a
n
i
m
a
t
e
d
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
4
_
C
o
n
s
e
n
s
u
s
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
q
u
o
r
u
m
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
Q
u
o
r
u
m
 
R
e
a
d
s
 
&
 
W
r
i
t
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
T
h
e
 
W
 
+
 
R
 
>
 
N
 
r
u
l
e
 
t
h
a
t
 
g
i
v
e
s
 
C
a
s
s
a
n
d
r
a
 
a
n
d
 
D
y
n
a
m
o
D
B
 
t
h
e
i
r
 
t
u
n
a
b
l
e
 
c
o
n
s
i
s
t
e
n
c
y
.
 
D
r
a
g
 
t
h
e
 
s
l
i
d
e
r
s
 
a
n
d
 
s
e
e
 
w
h
a
t
 
r
e
a
d
s
 
r
e
t
u
r
n
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
4
_
Q
u
o
r
u
m
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
v
e
c
t
o
r
-
c
l
o
c
k
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
V
e
c
t
o
r
 
C
l
o
c
k
s
 
&
 
C
o
n
f
l
i
c
t
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
H
o
w
 
d
i
s
t
r
i
b
u
t
e
d
 
s
y
s
t
e
m
s
 
d
e
t
e
c
t
 
c
o
n
c
u
r
r
e
n
t
 
w
r
i
t
e
s
 
w
i
t
h
o
u
t
 
a
 
g
l
o
b
a
l
 
c
l
o
c
k
 
—
 
a
n
d
 
w
h
a
t
 
t
o
 
d
o
 
w
h
e
n
 
t
w
o
 
c
l
i
e
n
t
s
 
e
d
i
t
 
t
h
e
 
s
a
m
e
 
k
e
y
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
4
_
V
e
c
t
o
r
C
l
o
c
k
s
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
2
p
c
-
v
s
-
s
a
g
a
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
2
P
C
 
v
s
 
S
a
g
a
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
T
w
o
-
p
h
a
s
e
 
c
o
m
m
i
t
'
s
 
b
l
o
c
k
i
n
g
 
p
r
e
p
a
r
e
/
c
o
m
m
i
t
 
d
a
n
c
e
 
v
s
 
t
h
e
 
s
a
g
a
'
s
 
c
o
m
p
e
n
s
a
t
i
n
g
-
a
c
t
i
o
n
s
 
t
r
a
i
l
.
 
I
n
j
e
c
t
 
f
a
i
l
u
r
e
s
 
a
n
d
 
w
a
t
c
h
 
e
a
c
h
 
r
e
s
p
o
n
d
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
4
_
D
i
s
t
r
i
b
u
t
e
d
T
x
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
i
d
e
m
p
o
t
e
n
c
y
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
I
d
e
m
p
o
t
e
n
c
y
 
&
 
E
x
a
c
t
l
y
-
O
n
c
e
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
W
h
y
 
y
o
u
r
 
c
h
a
r
g
e
-
c
a
r
d
 
e
n
d
p
o
i
n
t
 
m
u
s
t
 
b
e
 
s
a
f
e
 
t
o
 
r
e
t
r
y
,
 
a
n
d
 
h
o
w
 
a
 
s
i
n
g
l
e
 
i
d
e
m
p
o
t
e
n
c
y
 
k
e
y
 
t
u
r
n
s
 
a
t
-
l
e
a
s
t
-
o
n
c
e
 
i
n
t
o
 
e
x
a
c
t
l
y
-
o
n
c
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
4
_
I
d
e
m
p
o
t
e
n
c
y
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
5
"
,


 
 
 
 
n
u
m
b
e
r
:
 
5
,


 
 
 
 
t
i
t
l
e
:
 
"
A
s
y
n
c
 
&
 
M
e
s
s
a
g
i
n
g
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
D
e
c
o
u
p
l
e
 
p
r
o
d
u
c
e
r
s
 
f
r
o
m
 
c
o
n
s
u
m
e
r
s
.
 
Q
u
e
u
e
s
,
 
p
u
b
/
s
u
b
,
 
e
v
e
n
t
-
d
r
i
v
e
n
 
s
e
r
v
i
c
e
s
,
 
p
a
r
t
i
t
i
o
n
e
d
 
l
o
g
s
,
 
d
e
l
i
v
e
r
y
 
g
u
a
r
a
n
t
e
e
s
,
 
a
n
d
 
r
a
t
e
 
l
i
m
i
t
i
n
g
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
q
u
e
u
e
"
,
 
"
p
u
b
-
s
u
b
"
,
 
"
e
v
e
n
t
-
d
r
i
v
e
n
"
,
 
"
k
a
f
k
a
"
,
 
"
d
e
l
i
v
e
r
y
"
,
 
"
r
a
t
e
-
l
i
m
i
t
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
m
e
s
s
a
g
e
-
q
u
e
u
e
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
M
e
s
s
a
g
e
 
Q
u
e
u
e
s
 
1
0
1
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
P
r
o
d
u
c
e
r
 
→
 
b
r
o
k
e
r
 
→
 
c
o
n
s
u
m
e
r
 
w
i
t
h
 
a
d
j
u
s
t
a
b
l
e
 
c
o
n
s
u
m
e
r
 
s
p
e
e
d
.
 
S
l
o
w
 
t
h
e
 
c
o
n
s
u
m
e
r
 
d
o
w
n
 
a
n
d
 
w
a
t
c
h
 
t
h
e
 
q
u
e
u
e
 
f
i
l
l
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
5
_
M
e
s
s
a
g
e
Q
u
e
u
e
s
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
p
u
b
-
s
u
b
-
v
s
-
q
u
e
u
e
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
P
u
b
/
S
u
b
 
v
s
 
Q
u
e
u
e
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
S
a
m
e
 
m
e
s
s
a
g
e
,
 
t
w
o
 
r
o
u
t
i
n
g
 
m
o
d
e
l
s
.
 
T
o
g
g
l
e
 
m
o
d
e
s
 
a
n
d
 
w
a
t
c
h
 
o
n
e
 
c
o
n
s
u
m
e
r
 
w
i
n
 
(
q
u
e
u
e
)
 
v
s
 
a
l
l
 
s
u
b
s
c
r
i
b
e
r
s
 
g
e
t
 
a
 
c
o
p
y
 
(
p
u
b
/
s
u
b
)
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
5
_
P
u
b
S
u
b
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
e
v
e
n
t
-
d
r
i
v
e
n
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
E
v
e
n
t
-
D
r
i
v
e
n
 
A
r
c
h
i
t
e
c
t
u
r
e
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
S
e
r
v
i
c
e
s
 
e
m
i
t
 
a
n
d
 
r
e
a
c
t
 
t
o
 
e
v
e
n
t
s
 
i
n
s
t
e
a
d
 
o
f
 
c
a
l
l
i
n
g
 
e
a
c
h
 
o
t
h
e
r
.
 
C
l
i
c
k
 
a
n
y
 
s
e
r
v
i
c
e
 
i
n
 
t
h
e
 
g
r
a
p
h
 
t
o
 
s
e
e
 
w
h
a
t
 
f
l
o
w
s
 
i
n
 
a
n
d
 
o
u
t
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
5
_
E
v
e
n
t
D
r
i
v
e
n
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
k
a
f
k
a
-
l
o
g
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
K
a
f
k
a
 
P
a
r
t
i
t
i
o
n
e
d
 
L
o
g
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
A
p
p
e
n
d
-
o
n
l
y
 
l
o
g
 
p
e
r
 
p
a
r
t
i
t
i
o
n
.
 
T
w
o
 
c
o
n
s
u
m
e
r
 
g
r
o
u
p
s
 
r
e
a
d
 
i
n
d
e
p
e
n
d
e
n
t
l
y
 
w
i
t
h
 
t
h
e
i
r
 
o
w
n
 
o
f
f
s
e
t
 
c
u
r
s
o
r
s
.
 
R
e
p
l
a
y
 
f
r
o
m
 
a
n
y
 
p
o
i
n
t
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
5
_
K
a
f
k
a
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
e
l
i
v
e
r
y
-
g
u
a
r
a
n
t
e
e
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
e
l
i
v
e
r
y
 
G
u
a
r
a
n
t
e
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
A
t
-
m
o
s
t
-
o
n
c
e
,
 
a
t
-
l
e
a
s
t
-
o
n
c
e
,
 
e
x
a
c
t
l
y
-
o
n
c
e
.
 
I
n
j
e
c
t
 
f
a
i
l
u
r
e
s
 
a
n
d
 
w
a
t
c
h
 
w
h
a
t
 
e
a
c
h
 
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
o
e
s
 
t
o
 
y
o
u
r
 
m
e
s
s
a
g
e
 
l
o
g
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
5
_
D
e
l
i
v
e
r
y
G
u
a
r
a
n
t
e
e
s
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
r
a
t
e
-
l
i
m
i
t
i
n
g
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
R
a
t
e
 
L
i
m
i
t
i
n
g
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
T
o
k
e
n
 
b
u
c
k
e
t
,
 
l
e
a
k
y
 
b
u
c
k
e
t
,
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
 
—
 
t
h
r
e
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
s
 
r
u
n
n
i
n
g
 
o
n
 
t
h
e
 
s
a
m
e
 
b
u
r
s
t
 
i
n
p
u
t
.
 
P
i
c
k
 
w
h
i
c
h
 
f
i
t
s
 
w
h
i
c
h
 
w
o
r
k
l
o
a
d
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
5
_
R
a
t
e
L
i
m
i
t
i
n
g
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
6
"
,


 
 
 
 
n
u
m
b
e
r
:
 
6
,


 
 
 
 
t
i
t
l
e
:
 
"
R
e
l
i
a
b
i
l
i
t
y
 
&
 
F
a
i
l
u
r
e
 
M
o
d
e
s
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
S
t
o
p
 
a
 
s
i
n
g
l
e
 
f
a
i
l
i
n
g
 
d
e
p
e
n
d
e
n
c
y
 
f
r
o
m
 
t
a
k
i
n
g
 
d
o
w
n
 
y
o
u
r
 
e
n
t
i
r
e
 
s
y
s
t
e
m
.
 
C
i
r
c
u
i
t
 
b
r
e
a
k
e
r
s
,
 
r
e
t
r
i
e
s
,
 
b
u
l
k
h
e
a
d
s
,
 
g
r
a
c
e
f
u
l
 
s
h
u
t
d
o
w
n
,
 
c
h
a
o
s
,
 
o
b
s
e
r
v
a
b
i
l
i
t
y
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
c
i
r
c
u
i
t
-
b
r
e
a
k
e
r
"
,
 
"
r
e
t
r
y
"
,
 
"
b
u
l
k
h
e
a
d
"
,
 
"
d
e
p
l
o
y
"
,
 
"
c
h
a
o
s
"
,
 
"
o
b
s
e
r
v
a
b
i
l
i
t
y
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
c
i
r
c
u
i
t
-
b
r
e
a
k
e
r
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
C
i
r
c
u
i
t
 
B
r
e
a
k
e
r
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
C
l
o
s
e
d
 
→
 
O
p
e
n
 
→
 
H
a
l
f
-
o
p
e
n
 
s
t
a
t
e
 
m
a
c
h
i
n
e
.
 
I
n
j
e
c
t
 
f
a
i
l
u
r
e
s
 
p
a
s
t
 
t
h
e
 
t
h
r
e
s
h
o
l
d
 
a
n
d
 
w
a
t
c
h
 
t
h
e
 
b
r
e
a
k
e
r
 
t
r
i
p
,
 
t
r
a
f
f
i
c
 
s
t
o
p
,
 
a
n
d
 
p
r
o
b
e
s
 
r
e
s
t
o
r
e
 
s
e
r
v
i
c
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
6
_
C
i
r
c
u
i
t
B
r
e
a
k
e
r
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
r
e
t
r
i
e
s
-
j
i
t
t
e
r
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
R
e
t
r
i
e
s
,
 
T
i
m
e
o
u
t
s
,
 
J
i
t
t
e
r
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
T
h
r
e
e
 
r
e
t
r
y
 
s
t
r
a
t
e
g
i
e
s
 
r
a
c
i
n
g
:
 
n
o
 
j
i
t
t
e
r
 
(
t
h
u
n
d
e
r
i
n
g
 
h
e
r
d
)
,
 
e
x
p
o
n
e
n
t
i
a
l
 
b
a
c
k
o
f
f
,
 
f
u
l
l
 
j
i
t
t
e
r
.
 
C
o
m
p
a
r
e
 
t
h
e
 
a
g
g
r
e
g
a
t
e
 
r
e
t
r
y
 
s
t
o
r
m
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
6
_
R
e
t
r
y
J
i
t
t
e
r
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
b
u
l
k
h
e
a
d
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
B
u
l
k
h
e
a
d
s
 
&
 
I
s
o
l
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
S
h
a
r
e
d
 
v
s
 
p
a
r
t
i
t
i
o
n
e
d
 
t
h
r
e
a
d
 
p
o
o
l
s
.
 
I
n
j
e
c
t
 
a
 
s
l
o
w
 
d
o
w
n
s
t
r
e
a
m
 
a
n
d
 
w
a
t
c
h
 
f
a
i
l
u
r
e
s
 
c
a
s
c
a
d
e
 
—
 
o
r
 
g
e
t
 
c
o
n
t
a
i
n
e
d
 
t
o
 
a
 
s
i
n
g
l
e
 
l
a
n
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
6
_
B
u
l
k
h
e
a
d
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
g
r
a
c
e
f
u
l
-
s
h
u
t
d
o
w
n
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
G
r
a
c
e
f
u
l
 
S
h
u
t
d
o
w
n
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
R
o
l
l
i
n
g
 
d
e
p
l
o
y
 
w
i
t
h
 
c
o
n
n
e
c
t
i
o
n
 
d
r
a
i
n
i
n
g
.
 
P
o
d
 
g
e
t
s
 
S
I
G
T
E
R
M
,
 
d
r
a
i
n
s
 
i
n
-
f
l
i
g
h
t
,
 
f
a
i
l
s
 
h
e
a
l
t
h
 
c
h
e
c
k
,
 
g
e
t
s
 
r
e
m
o
v
e
d
 
f
r
o
m
 
L
B
,
 
t
h
e
n
 
e
x
i
t
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
6
_
G
r
a
c
e
f
u
l
S
h
u
t
d
o
w
n
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
c
h
a
o
s
-
e
n
g
i
n
e
e
r
i
n
g
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
C
h
a
o
s
 
E
n
g
i
n
e
e
r
i
n
g
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
C
l
i
c
k
 
a
n
y
 
n
o
d
e
,
 
n
e
t
w
o
r
k
 
e
d
g
e
,
 
o
r
 
d
i
s
k
 
t
o
 
b
r
e
a
k
 
i
t
.
 
W
a
t
c
h
 
t
h
e
 
c
l
u
s
t
e
r
 
e
i
t
h
e
r
 
a
b
s
o
r
b
 
o
r
 
c
a
s
c
a
d
e
.
 
A
 
m
i
n
i
a
t
u
r
e
 
C
h
a
o
s
 
M
o
n
k
e
y
 
p
l
a
y
g
r
o
u
n
d
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
6
_
C
h
a
o
s
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
o
b
s
e
r
v
a
b
i
l
i
t
y
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
M
e
t
r
i
c
s
,
 
L
o
g
s
 
&
 
T
r
a
c
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
T
h
r
e
e
 
o
b
s
e
r
v
a
b
i
l
i
t
y
 
p
i
l
l
a
r
s
 
o
n
 
o
n
e
 
s
c
r
e
e
n
.
 
A
 
s
p
i
k
e
 
i
n
 
t
h
e
 
m
e
t
r
i
c
 
l
i
n
e
,
 
t
h
e
 
m
a
t
c
h
i
n
g
 
e
r
r
o
r
 
i
n
 
t
h
e
 
l
o
g
,
 
t
h
e
 
f
a
i
l
i
n
g
 
s
p
a
n
 
i
n
 
t
h
e
 
t
r
a
c
e
 
t
r
e
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
6
_
O
b
s
e
r
v
a
b
i
l
i
t
y
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
7
"
,


 
 
 
 
n
u
m
b
e
r
:
 
7
,


 
 
 
 
t
i
t
l
e
:
 
"
S
e
a
r
c
h
,
 
G
e
o
 
&
 
R
e
a
l
-
t
i
m
e
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
H
o
w
 
s
e
a
r
c
h
 
e
n
g
i
n
e
s
 
i
n
d
e
x
 
d
o
c
u
m
e
n
t
s
,
 
h
o
w
 
g
e
o
 
s
y
s
t
e
m
s
 
f
i
n
d
 
w
h
a
t
'
s
 
n
e
a
r
b
y
,
 
a
n
d
 
h
o
w
 
r
e
a
l
-
t
i
m
e
 
u
p
d
a
t
e
s
 
r
e
a
c
h
 
a
 
m
i
l
l
i
o
n
 
b
r
o
w
s
e
r
s
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
s
e
a
r
c
h
"
,
 
"
r
a
n
k
i
n
g
"
,
 
"
g
e
o
h
a
s
h
"
,
 
"
w
e
b
s
o
c
k
e
t
"
,
 
"
c
d
c
"
,
 
"
f
a
n
o
u
t
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
i
n
v
e
r
t
e
d
-
i
n
d
e
x
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
I
n
v
e
r
t
e
d
 
I
n
d
e
x
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
T
o
k
e
n
i
z
e
 
d
o
c
u
m
e
n
t
s
 
→
 
p
o
s
t
i
n
g
 
l
i
s
t
s
.
 
T
y
p
e
 
a
 
q
u
e
r
y
,
 
w
a
t
c
h
 
t
h
e
 
i
n
d
e
x
 
l
i
g
h
t
 
u
p
 
m
a
t
c
h
i
n
g
 
d
o
c
s
 
a
n
d
 
r
a
n
k
 
t
h
e
m
 
b
y
 
s
c
o
r
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
7
_
I
n
v
e
r
t
e
d
I
n
d
e
x
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
r
a
n
k
i
n
g
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
T
F
-
I
D
F
 
&
 
B
M
2
5
 
R
a
n
k
i
n
g
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
S
l
i
d
e
 
q
u
e
r
y
 
t
e
r
m
s
 
a
n
d
 
w
e
i
g
h
t
s
.
 
D
o
c
u
m
e
n
t
 
r
a
n
k
i
n
g
s
 
r
e
o
r
d
e
r
 
l
i
v
e
.
 
S
e
e
 
w
h
i
c
h
 
t
e
r
m
s
 
i
n
 
w
h
i
c
h
 
d
o
c
s
 
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
d
 
w
h
i
c
h
 
b
o
o
s
t
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
7
_
R
a
n
k
i
n
g
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
g
e
o
-
i
n
d
e
x
e
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
G
e
o
h
a
s
h
 
&
 
Q
u
a
d
t
r
e
e
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
D
r
a
g
 
a
 
p
i
n
 
o
n
 
a
 
m
a
p
.
 
G
e
o
h
a
s
h
 
p
r
e
c
i
s
i
o
n
 
t
i
l
e
s
 
a
r
o
u
n
d
 
i
t
.
 
'
F
i
n
d
 
n
e
a
r
b
y
'
 
s
w
e
e
p
s
 
a
 
r
a
d
i
u
s
 
a
n
d
 
l
i
g
h
t
s
 
u
p
 
m
a
t
c
h
i
n
g
 
c
e
l
l
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
7
_
G
e
o
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
w
e
b
s
o
c
k
e
t
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
W
e
b
S
o
c
k
e
t
s
 
v
s
 
L
o
n
g
 
P
o
l
l
i
n
g
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
T
h
r
e
e
 
t
i
m
e
l
i
n
e
s
 
u
n
d
e
r
 
m
a
t
c
h
i
n
g
 
t
r
a
f
f
i
c
:
 
s
h
o
r
t
 
p
o
l
l
i
n
g
,
 
l
o
n
g
 
p
o
l
l
i
n
g
,
 
W
e
b
S
o
c
k
e
t
s
.
 
L
a
t
e
n
c
y
,
 
s
e
r
v
e
r
 
c
o
s
t
,
 
c
o
n
n
e
c
t
i
o
n
 
c
o
u
n
t
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
7
_
W
e
b
S
o
c
k
e
t
s
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
c
d
c
-
p
i
p
e
l
i
n
e
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
C
h
a
n
g
e
 
D
a
t
a
 
C
a
p
t
u
r
e
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
D
B
 
→
 
C
D
C
 
→
 
s
e
a
r
c
h
 
i
n
d
e
x
 
→
 
c
l
i
e
n
t
.
 
A
n
i
m
a
t
e
d
 
c
h
a
n
g
e
 
p
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
 
w
i
t
h
 
l
a
g
 
r
e
a
d
i
n
g
s
 
a
t
 
e
a
c
h
 
h
o
p
.
 
C
o
n
s
i
s
t
e
n
t
 
d
e
n
o
r
m
a
l
i
z
a
t
i
o
n
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
7
_
C
D
C
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
n
o
t
i
f
i
c
a
t
i
o
n
-
f
a
n
o
u
t
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
N
o
t
i
f
i
c
a
t
i
o
n
 
F
a
n
-
o
u
t
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
P
u
s
h
 
v
s
 
p
u
l
l
 
a
t
 
s
c
a
l
e
.
 
T
h
e
 
c
e
l
e
b
r
i
t
y
-
f
a
n
o
u
t
 
p
r
o
b
l
e
m
 
a
n
d
 
t
h
e
 
h
y
b
r
i
d
 
s
o
l
u
t
i
o
n
 
t
h
a
t
 
p
o
w
e
r
s
 
T
w
i
t
t
e
r
,
 
I
n
s
t
a
g
r
a
m
,
 
a
n
d
 
W
h
a
t
s
a
p
p
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
7
_
F
a
n
o
u
t
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
8
"
,


 
 
 
 
n
u
m
b
e
r
:
 
8
,


 
 
 
 
t
i
t
l
e
:
 
"
E
n
d
-
t
o
-
E
n
d
 
C
a
s
e
 
S
t
u
d
i
e
s
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
S
i
x
 
c
l
a
s
s
i
c
 
i
n
t
e
r
v
i
e
w
 
d
e
s
i
g
n
s
 
b
u
i
l
t
 
e
n
d
-
t
o
-
e
n
d
:
 
T
i
n
y
U
R
L
,
 
T
w
i
t
t
e
r
 
f
e
e
d
,
 
U
b
e
r
 
d
i
s
p
a
t
c
h
,
 
W
h
a
t
s
A
p
p
,
 
Y
o
u
T
u
b
e
,
 
d
i
s
t
r
i
b
u
t
e
d
 
r
a
t
e
 
l
i
m
i
t
e
r
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
t
i
n
y
u
r
l
"
,
 
"
t
w
i
t
t
e
r
"
,
 
"
u
b
e
r
"
,
 
"
w
h
a
t
s
a
p
p
"
,
 
"
y
o
u
t
u
b
e
"
,
 
"
r
a
t
e
-
l
i
m
i
t
e
r
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
e
s
i
g
n
-
t
i
n
y
u
r
l
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
e
s
i
g
n
 
T
i
n
y
U
R
L
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
S
h
o
r
t
-
c
o
d
e
 
g
e
n
e
r
a
t
i
o
n
,
 
t
h
e
 
r
e
d
i
r
e
c
t
 
p
a
t
h
,
 
h
o
t
-
k
e
y
 
c
a
c
h
e
 
r
a
t
i
o
,
 
a
n
d
 
t
h
e
 
b
a
c
k
-
o
f
-
e
n
v
e
l
o
p
e
 
n
u
m
b
e
r
s
 
t
h
a
t
 
j
u
s
t
i
f
y
 
e
v
e
r
y
 
b
o
x
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
8
_
T
i
n
y
U
R
L
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
e
s
i
g
n
-
t
w
i
t
t
e
r
-
f
e
e
d
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
e
s
i
g
n
 
T
w
i
t
t
e
r
 
F
e
e
d
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
P
u
s
h
 
t
i
m
e
l
i
n
e
 
f
o
r
 
n
o
r
m
a
l
 
u
s
e
r
s
,
 
p
u
l
l
 
m
e
r
g
e
 
f
o
r
 
c
e
l
e
b
r
i
t
i
e
s
.
 
H
y
b
r
i
d
 
f
a
n
-
o
u
t
 
a
n
i
m
a
t
e
d
 
e
n
d
-
t
o
-
e
n
d
 
w
i
t
h
 
r
e
a
l
i
s
t
i
c
 
l
a
t
e
n
c
i
e
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
8
_
T
w
i
t
t
e
r
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
e
s
i
g
n
-
u
b
e
r
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
e
s
i
g
n
 
U
b
e
r
 
D
i
s
p
a
t
c
h
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
L
i
v
e
 
m
a
p
 
w
i
t
h
 
d
r
i
v
e
r
s
 
+
 
r
i
d
e
r
s
.
 
G
e
o
h
a
s
h
 
m
a
t
c
h
i
n
g
,
 
s
u
r
g
e
 
z
o
n
e
s
,
 
t
h
e
 
d
i
s
p
a
t
c
h
 
l
o
o
p
,
 
a
n
d
 
h
o
w
 
1
 
t
r
i
p
 
b
e
c
o
m
e
s
 
5
0
 
s
e
r
v
i
c
e
 
c
a
l
l
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
8
_
U
b
e
r
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
e
s
i
g
n
-
w
h
a
t
s
a
p
p
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
e
s
i
g
n
 
W
h
a
t
s
A
p
p
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
C
o
n
n
e
c
t
i
o
n
 
b
o
x
 
p
e
r
 
u
s
e
r
,
 
b
r
o
k
e
r
 
r
o
u
t
i
n
g
,
 
d
e
l
i
v
e
r
y
 
s
t
a
t
e
 
m
a
c
h
i
n
e
 
(
s
e
n
t
 
→
 
d
e
l
i
v
e
r
e
d
 
→
 
r
e
a
d
)
.
 
W
h
a
t
 
'
2
 
t
i
c
k
s
'
 
a
c
t
u
a
l
l
y
 
m
e
a
n
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
8
_
W
h
a
t
s
A
p
p
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
e
s
i
g
n
-
y
o
u
t
u
b
e
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
e
s
i
g
n
 
Y
o
u
T
u
b
e
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
U
p
l
o
a
d
 
→
 
t
r
a
n
s
c
o
d
i
n
g
 
p
i
p
e
l
i
n
e
 
→
 
C
D
N
 
e
d
g
e
 
s
e
l
e
c
t
i
o
n
 
→
 
a
d
a
p
t
i
v
e
 
b
i
t
r
a
t
e
 
p
l
a
y
b
a
c
k
 
t
h
a
t
 
d
o
w
n
s
h
i
f
t
s
 
m
i
d
-
v
i
d
e
o
 
o
n
 
a
 
s
l
o
w
 
l
i
n
k
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
8
_
Y
o
u
T
u
b
e
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
e
s
i
g
n
-
r
a
t
e
-
l
i
m
i
t
e
r
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
e
s
i
g
n
 
a
 
D
i
s
t
r
i
b
u
t
e
d
 
R
a
t
e
 
L
i
m
i
t
e
r
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
 
 
 
 
"
M
o
v
e
 
f
r
o
m
 
i
n
-
p
r
o
c
e
s
s
 
t
o
 
m
u
l
t
i
-
i
n
s
t
a
n
c
e
:
 
R
e
d
i
s
 
L
u
a
 
s
c
r
i
p
t
s
,
 
s
h
a
r
d
e
d
 
c
o
u
n
t
e
r
s
,
 
e
d
g
e
 
+
 
s
e
r
v
i
c
e
 
t
i
e
r
s
,
 
a
t
o
m
i
c
 
c
h
e
c
k
s
 
a
c
r
o
s
s
 
t
h
e
 
f
l
e
e
t
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
S
D
_
L
8
_
R
a
t
e
L
i
m
i
t
e
r
A
c
t
i
v
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


]
;




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
f
i
n
d
L
e
v
e
l
(
l
e
v
e
l
I
d
:
 
s
t
r
i
n
g
)
:
 
L
e
v
e
l
E
n
t
r
y
 
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
 
{


 
 
r
e
t
u
r
n
 
L
E
V
E
L
S
.
f
i
n
d
(
(
l
)
 
=
>
 
l
.
i
d
 
=
=
=
 
l
e
v
e
l
I
d
)
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
f
i
n
d
L
e
s
s
o
n
(
l
e
v
e
l
I
d
:
 
s
t
r
i
n
g
,
 
l
e
s
s
o
n
S
l
u
g
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


 
 
l
e
v
e
l
:
 
L
e
v
e
l
E
n
t
r
y
;


 
 
l
e
s
s
o
n
:
 
L
e
s
s
o
n
E
n
t
r
y
;


 
 
l
e
s
s
o
n
I
n
d
e
x
:
 
n
u
m
b
e
r
;


}
 
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
 
{


 
 
c
o
n
s
t
 
l
e
v
e
l
 
=
 
f
i
n
d
L
e
v
e
l
(
l
e
v
e
l
I
d
)
;


 
 
i
f
 
(
!
l
e
v
e
l
)
 
r
e
t
u
r
n
 
u
n
d
e
f
i
n
e
d
;


 
 
c
o
n
s
t
 
l
e
s
s
o
n
I
n
d
e
x
 
=
 
l
e
v
e
l
.
l
e
s
s
o
n
s
.
f
i
n
d
I
n
d
e
x
(
(
l
)
 
=
>
 
l
.
s
l
u
g
 
=
=
=
 
l
e
s
s
o
n
S
l
u
g
)
;


 
 
i
f
 
(
l
e
s
s
o
n
I
n
d
e
x
 
=
=
=
 
-
1
)
 
r
e
t
u
r
n
 
u
n
d
e
f
i
n
e
d
;


 
 
r
e
t
u
r
n
 
{
 
l
e
v
e
l
,
 
l
e
s
s
o
n
:
 
l
e
v
e
l
.
l
e
s
s
o
n
s
[
l
e
s
s
o
n
I
n
d
e
x
]
,
 
l
e
s
s
o
n
I
n
d
e
x
 
}
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
g
e
t
N
e
i
g
h
b
o
u
r
s
(
l
e
v
e
l
I
d
:
 
s
t
r
i
n
g
,
 
l
e
s
s
o
n
S
l
u
g
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


 
 
p
r
e
v
?
:
 
{
 
l
e
v
e
l
I
d
:
 
s
t
r
i
n
g
;
 
s
l
u
g
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
 
}
;


 
 
n
e
x
t
?
:
 
{
 
l
e
v
e
l
I
d
:
 
s
t
r
i
n
g
;
 
s
l
u
g
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
 
}
;


}
 
{


 
 
c
o
n
s
t
 
f
o
u
n
d
 
=
 
f
i
n
d
L
e
s
s
o
n
(
l
e
v
e
l
I
d
,
 
l
e
s
s
o
n
S
l
u
g
)
;


 
 
i
f
 
(
!
f
o
u
n
d
)
 
r
e
t
u
r
n
 
{
}
;


 
 
c
o
n
s
t
 
{
 
l
e
v
e
l
,
 
l
e
s
s
o
n
I
n
d
e
x
 
}
 
=
 
f
o
u
n
d
;


 
 
c
o
n
s
t
 
l
e
v
e
l
I
d
x
 
=
 
L
E
V
E
L
S
.
f
i
n
d
I
n
d
e
x
(
(
l
)
 
=
>
 
l
.
i
d
 
=
=
=
 
l
e
v
e
l
.
i
d
)
;




 
 
l
e
t
 
p
r
e
v
:
 
{
 
l
e
v
e
l
I
d
:
 
s
t
r
i
n
g
;
 
s
l
u
g
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
 
}
 
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
;


 
 
i
f
 
(
l
e
s
s
o
n
I
n
d
e
x
 
>
 
0
)
 
{


 
 
 
 
c
o
n
s
t
 
p
 
=
 
l
e
v
e
l
.
l
e
s
s
o
n
s
[
l
e
s
s
o
n
I
n
d
e
x
 
-
 
1
]
;


 
 
 
 
p
r
e
v
 
=
 
{
 
l
e
v
e
l
I
d
:
 
l
e
v
e
l
.
i
d
,
 
s
l
u
g
:
 
p
.
s
l
u
g
,
 
t
i
t
l
e
:
 
p
.
t
i
t
l
e
 
}
;


 
 
}
 
e
l
s
e
 
i
f
 
(
l
e
v
e
l
I
d
x
 
>
 
0
)
 
{


 
 
 
 
c
o
n
s
t
 
p
r
e
v
L
e
v
e
l
 
=
 
L
E
V
E
L
S
[
l
e
v
e
l
I
d
x
 
-
 
1
]
;


 
 
 
 
c
o
n
s
t
 
p
 
=
 
p
r
e
v
L
e
v
e
l
.
l
e
s
s
o
n
s
[
p
r
e
v
L
e
v
e
l
.
l
e
s
s
o
n
s
.
l
e
n
g
t
h
 
-
 
1
]
;


 
 
 
 
i
f
 
(
p
)
 
p
r
e
v
 
=
 
{
 
l
e
v
e
l
I
d
:
 
p
r
e
v
L
e
v
e
l
.
i
d
,
 
s
l
u
g
:
 
p
.
s
l
u
g
,
 
t
i
t
l
e
:
 
p
.
t
i
t
l
e
 
}
;


 
 
}




 
 
l
e
t
 
n
e
x
t
:
 
{
 
l
e
v
e
l
I
d
:
 
s
t
r
i
n
g
;
 
s
l
u
g
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
 
}
 
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
;


 
 
i
f
 
(
l
e
s
s
o
n
I
n
d
e
x
 
<
 
l
e
v
e
l
.
l
e
s
s
o
n
s
.
l
e
n
g
t
h
 
-
 
1
)
 
{


 
 
 
 
c
o
n
s
t
 
n
 
=
 
l
e
v
e
l
.
l
e
s
s
o
n
s
[
l
e
s
s
o
n
I
n
d
e
x
 
+
 
1
]
;


 
 
 
 
n
e
x
t
 
=
 
{
 
l
e
v
e
l
I
d
:
 
l
e
v
e
l
.
i
d
,
 
s
l
u
g
:
 
n
.
s
l
u
g
,
 
t
i
t
l
e
:
 
n
.
t
i
t
l
e
 
}
;


 
 
}
 
e
l
s
e
 
i
f
 
(
l
e
v
e
l
I
d
x
 
<
 
L
E
V
E
L
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
)
 
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
L
e
v
e
l
 
=
 
L
E
V
E
L
S
[
l
e
v
e
l
I
d
x
 
+
 
1
]
;


 
 
 
 
c
o
n
s
t
 
n
 
=
 
n
e
x
t
L
e
v
e
l
.
l
e
s
s
o
n
s
[
0
]
;


 
 
 
 
i
f
 
(
n
)
 
n
e
x
t
 
=
 
{
 
l
e
v
e
l
I
d
:
 
n
e
x
t
L
e
v
e
l
.
i
d
,
 
s
l
u
g
:
 
n
.
s
l
u
g
,
 
t
i
t
l
e
:
 
n
.
t
i
t
l
e
 
}
;


 
 
}




 
 
r
e
t
u
r
n
 
{
 
p
r
e
v
,
 
n
e
x
t
 
}
;


}


