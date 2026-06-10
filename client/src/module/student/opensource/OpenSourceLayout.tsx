
i
m
p
o
r
t
 
{
 
F
r
a
g
m
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
 
O
u
t
l
e
t
,
 
u
s
e
L
o
c
a
t
i
o
n
,
 
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
 
C
h
e
v
r
o
n
R
i
g
h
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
C
o
a
c
h
P
a
n
e
l
 
f
r
o
m
 
"
.
/
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
C
o
a
c
h
P
a
n
e
l
"
;


i
m
p
o
r
t
 
C
o
a
c
h
F
l
o
a
t
i
n
g
B
u
t
t
o
n
 
f
r
o
m
 
"
.
/
C
o
a
c
h
F
l
o
a
t
i
n
g
B
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
v
i
d
e
r
 
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
c
o
n
t
e
x
t
"
;




c
o
n
s
t
 
S
E
G
M
E
N
T
_
N
A
M
E
S
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
>
 
=
 
{


 
 
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
:
 
"
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
"
,


 
 
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
:
 
"
F
i
r
s
t
 
P
R
"
,


 
 
"
g
s
o
c
-
p
r
o
p
o
s
a
l
"
:
 
"
G
S
o
C
 
P
r
o
p
o
s
a
l
"
,


 
 
g
s
o
c
:
 
"
G
S
o
C
 
R
e
p
o
s
"
,


 
 
"
r
e
a
d
-
c
o
d
e
b
a
s
e
"
:
 
"
R
e
a
d
 
C
o
d
e
b
a
s
e
"
,


 
 
"
g
i
t
-
g
u
i
d
e
"
:
 
"
G
i
t
 
G
u
i
d
e
"
,


 
 
c
o
m
m
u
n
i
c
a
t
i
o
n
:
 
"
C
o
m
m
u
n
i
c
a
t
i
o
n
"
,


 
 
c
i
c
d
:
 
"
C
I
/
C
D
"
,


 
 
"
h
a
c
k
a
t
h
o
n
-
p
r
e
p
"
:
 
"
H
a
c
k
a
t
h
o
n
 
P
r
e
p
"
,


 
 
p
r
o
g
r
a
m
s
:
 
"
P
r
o
g
r
a
m
s
"
,


 
 
a
n
a
l
y
t
i
c
s
:
 
"
A
n
a
l
y
t
i
c
s
"
,


}
;




c
o
n
s
t
 
L
O
W
E
R
C
A
S
E
_
W
O
R
D
S
 
=
 
n
e
w
 
S
e
t
(
[
"
a
n
d
"
,
 
"
o
r
"
,
 
"
t
h
e
"
,
 
"
i
n
"
,
 
"
o
n
"
,
 
"
a
t
"
,
 
"
t
o
"
,
 
"
f
o
r
"
,
 
"
o
f
"
,
 
"
w
i
t
h
"
,
 
"
a
"
,
 
"
a
n
"
]
)
;




f
u
n
c
t
i
o
n
 
f
o
r
m
a
t
S
e
g
m
e
n
t
(
s
e
g
m
e
n
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
 
s
t
r
i
n
g
 
{


 
 
i
f
 
(
S
E
G
M
E
N
T
_
N
A
M
E
S
[
s
e
g
m
e
n
t
]
)
 
r
e
t
u
r
n
 
S
E
G
M
E
N
T
_
N
A
M
E
S
[
s
e
g
m
e
n
t
]
;


 
 
r
e
t
u
r
n
 
s
e
g
m
e
n
t


 
 
 
 
.
s
p
l
i
t
(
"
-
"
)


 
 
 
 
.
m
a
p
(
(
w
,
 
i
)
 
=
>
 
(
i
 
>
 
0
 
&
&
 
L
O
W
E
R
C
A
S
E
_
W
O
R
D
S
.
h
a
s
(
w
)
)
 
?
 
w
 
:
 
w
.
c
h
a
r
A
t
(
0
)
.
t
o
U
p
p
e
r
C
a
s
e
(
)
 
+
 
w
.
s
l
i
c
e
(
1
)
)


 
 
 
 
.
j
o
i
n
(
"
 
"
)
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
B
r
e
a
d
c
r
u
m
b
(
)
 
{


 
 
c
o
n
s
t
 
{
 
p
a
t
h
n
a
m
e
 
}
 
=
 
u
s
e
L
o
c
a
t
i
o
n
(
)
;


 
 
c
o
n
s
t
 
s
e
g
m
e
n
t
s
 
=
 
p
a
t
h
n
a
m
e
.
s
p
l
i
t
(
"
/
"
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




 
 
c
o
n
s
t
 
o
s
I
d
x
 
=
 
s
e
g
m
e
n
t
s
.
i
n
d
e
x
O
f
(
"
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
)
;


 
 
i
f
 
(
o
s
I
d
x
 
<
 
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
 
r
e
l
e
v
a
n
t
S
e
g
m
e
n
t
s
 
=
 
s
e
g
m
e
n
t
s
.
s
l
i
c
e
(
o
s
I
d
x
)
;


 
 
i
f
 
(
r
e
l
e
v
a
n
t
S
e
g
m
e
n
t
s
.
l
e
n
g
t
h
 
<
=
 
1
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
t
e
m
s
 
=
 
r
e
l
e
v
a
n
t
S
e
g
m
e
n
t
s
.
m
a
p
(
(
s
e
g
,
 
i
)
 
=
>
 
(
{


 
 
 
 
p
a
t
h
:
 
"
/
"
 
+
 
s
e
g
m
e
n
t
s
.
s
l
i
c
e
(
0
,
 
o
s
I
d
x
 
+
 
i
 
+
 
1
)
.
j
o
i
n
(
"
/
"
)
,


 
 
 
 
n
a
m
e
:
 
f
o
r
m
a
t
S
e
g
m
e
n
t
(
s
e
g
)
,


 
 
 
 
i
s
L
a
s
t
:
 
i
 
=
=
=
 
r
e
l
e
v
a
n
t
S
e
g
m
e
n
t
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
,


 
 
}
)
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
n
a
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
1
.
5
 
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
 
m
b
-
6
 
f
l
e
x
-
w
r
a
p
 
p
x
-
4
 
s
m
:
p
x
-
8
 
p
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
h
-
1
 
w
-
1
 
b
g
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
m
a
p
(
(
i
t
e
m
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
F
r
a
g
m
e
n
t
 
k
e
y
=
{
i
t
e
m
.
p
a
t
h
}
>


 
 
 
 
 
 
 
 
 
 
{
i
 
>
 
0
 
&
&
 
<
C
h
e
v
r
o
n
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
3
 
h
-
3
 
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
s
t
o
n
e
-
6
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
 
/
>
}


 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
i
s
L
a
s
t
 
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
"
>
{
i
t
e
m
.
n
a
m
e
}
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


 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
i
t
e
m
.
p
a
t
h
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
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
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
s
t
o
n
e
-
5
0
 
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
c
o
l
o
r
s
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
F
r
a
g
m
e
n
t
>


 
 
 
 
 
 
)
)
}


 
 
 
 
<
/
n
a
v
>


 
 
)
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
L
a
y
o
u
t
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
v
i
d
e
r
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
 
m
i
n
-
h
-
[
c
a
l
c
(
1
0
0
v
h
-
4
r
e
m
)
]
"
>


 
 
 
 
 
 
 
 
<
m
a
i
n
>


 
 
 
 
 
 
 
 
 
 
<
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
B
r
e
a
d
c
r
u
m
b
 
/
>


 
 
 
 
 
 
 
 
 
 
<
O
u
t
l
e
t
 
/
>


 
 
 
 
 
 
 
 
<
/
m
a
i
n
>


 
 
 
 
 
 
 
 
<
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
C
o
a
c
h
P
a
n
e
l
 
/
>


 
 
 
 
 
 
 
 
<
C
o
a
c
h
F
l
o
a
t
i
n
g
B
u
t
t
o
n
 
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
v
i
d
e
r
>


 
 
)
;


}


