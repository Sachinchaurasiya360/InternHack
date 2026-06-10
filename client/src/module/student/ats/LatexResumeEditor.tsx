
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
E
f
f
e
c
t
,
 
u
s
e
R
e
f
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
M
e
m
o
 
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
 
L
i
n
k
,
 
u
s
e
S
e
a
r
c
h
P
a
r
a
m
s
,
 
u
s
e
N
a
v
i
g
a
t
e
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
@
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
 
m
o
t
i
o
n
 
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


 
 
D
o
w
n
l
o
a
d
,


 
 
A
l
e
r
t
C
i
r
c
l
e
,


 
 
F
i
l
e
C
o
d
e
2
,


 
 
E
y
e
,


 
 
L
o
a
d
e
r
2
,


 
 
P
l
a
y
,


 
 
C
o
d
e
2
,


 
 
M
e
s
s
a
g
e
S
q
u
a
r
e
,


 
 
L
o
c
k
,


 
 
P
l
u
s
,


 
 
X
,


 
 
F
i
l
e
C
o
g
,


 
 
U
p
l
o
a
d
,


 
 
C
h
e
v
r
o
n
D
o
w
n
,


 
 
U
n
d
o
2
,


 
 
R
e
d
o
2
,


 
 
L
a
y
o
u
t
G
r
i
d
,


 
 
W
a
n
d
2
,


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
d
e
M
i
r
r
o
r
 
f
r
o
m
 
"
@
u
i
w
/
r
e
a
c
t
-
c
o
d
e
m
i
r
r
o
r
"
;


i
m
p
o
r
t
 
A
t
s
T
o
o
l
s
N
a
v
 
f
r
o
m
 
"
.
/
A
t
s
T
o
o
l
s
N
a
v
"
;


i
m
p
o
r
t
 
L
a
t
e
x
C
h
a
t
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
L
a
t
e
x
C
h
a
t
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
 
a
p
i
 
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
L
a
t
e
x
A
u
t
o
S
a
v
e
 
}
 
f
r
o
m
 
"
.
/
u
s
e
L
a
t
e
x
A
u
t
o
S
a
v
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
 
C
o
p
y
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
C
o
p
y
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
 
g
e
t
L
a
t
e
x
T
e
m
p
l
a
t
e
 
}
 
f
r
o
m
 
"
.
/
l
a
t
e
x
-
t
e
m
p
l
a
t
e
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
 
K
i
c
k
e
r
 
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
K
i
c
k
e
r
"
;




c
o
n
s
t
 
D
E
F
A
U
L
T
_
T
E
M
P
L
A
T
E
 
=
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
1
1
p
t
,
a
4
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
m
a
r
g
i
n
=
0
.
7
5
i
n
]
{
g
e
o
m
e
t
r
y
}




\
\
p
a
g
e
s
t
y
l
e
{
e
m
p
t
y
}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




\
\
b
e
g
i
n
{
c
e
n
t
e
r
}


 
 
 
 
{
\
\
L
A
R
G
E
 
\
\
t
e
x
t
b
f
{
J
o
h
n
 
D
o
e
}
}
 
\
\
\
\


 
 
 
 
j
o
h
n
.
d
o
e
@
e
m
a
i
l
.
c
o
m
 
$
\
\
c
d
o
t
$
 
+
1
 
(
5
5
5
)
 
1
2
3
-
4
5
6
7
 
$
\
\
c
d
o
t
$
 
S
a
n
 
F
r
a
n
c
i
s
c
o
,
 
C
A


\
\
e
n
d
{
c
e
n
t
e
r
}




\
\
s
e
c
t
i
o
n
*
{
S
u
m
m
a
r
y
}


E
x
p
e
r
i
e
n
c
e
d
 
s
o
f
t
w
a
r
e
 
e
n
g
i
n
e
e
r
 
w
i
t
h
 
5
+
 
y
e
a
r
s
 
b
u
i
l
d
i
n
g
 
s
c
a
l
a
b
l
e
 
w
e
b
 
a
p
p
l
i
c
a
t
i
o
n
s
.
 
P
r
o
f
i
c
i
e
n
t
 
i
n
 
R
e
a
c
t
,
 
N
o
d
e
.
j
s
,
 
a
n
d
 
c
l
o
u
d
 
i
n
f
r
a
s
t
r
u
c
t
u
r
e
.




\
\
s
e
c
t
i
o
n
*
{
E
x
p
e
r
i
e
n
c
e
}


\
\
t
e
x
t
b
f
{
S
e
n
i
o
r
 
S
o
f
t
w
a
r
e
 
E
n
g
i
n
e
e
r
}
 
\
\
h
f
i
l
l
 
T
e
c
h
C
o
r
p
 
I
n
c
.
 
\
\
\
\


\
\
t
e
x
t
i
t
{
J
a
n
 
2
0
2
2
 
-
-
 
P
r
e
s
e
n
t
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}


 
 
 
 
\
\
i
t
e
m
 
L
e
d
 
d
e
v
e
l
o
p
m
e
n
t
 
o
f
 
a
 
r
e
a
l
-
t
i
m
e
 
a
n
a
l
y
t
i
c
s
 
d
a
s
h
b
o
a
r
d
 
s
e
r
v
i
n
g
 
5
0
K
+
 
d
a
i
l
y
 
u
s
e
r
s


 
 
 
 
\
\
i
t
e
m
 
R
e
d
u
c
e
d
 
A
P
I
 
r
e
s
p
o
n
s
e
 
t
i
m
e
s
 
b
y
 
4
0
\
\
%
 
t
h
r
o
u
g
h
 
q
u
e
r
y
 
o
p
t
i
m
i
z
a
t
i
o
n


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
E
d
u
c
a
t
i
o
n
}


\
\
t
e
x
t
b
f
{
B
.
S
.
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
}
 
\
\
h
f
i
l
l
 
U
C
 
B
e
r
k
e
l
e
y
 
\
\
\
\


\
\
t
e
x
t
i
t
{
2
0
1
5
 
-
-
 
2
0
1
9
}




\
\
s
e
c
t
i
o
n
*
{
S
k
i
l
l
s
}


\
\
t
e
x
t
b
f
{
L
a
n
g
u
a
g
e
s
:
}
 
J
a
v
a
S
c
r
i
p
t
,
 
T
y
p
e
S
c
r
i
p
t
,
 
P
y
t
h
o
n
,
 
S
Q
L
 
\
\
\
\


\
\
t
e
x
t
b
f
{
T
o
o
l
s
:
}
 
G
i
t
,
 
D
o
c
k
e
r
,
 
A
W
S
,
 
P
o
s
t
g
r
e
S
Q
L




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
;




c
o
n
s
t
 
c
a
r
d
C
l
s
 
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
s
t
o
n
e
-
9
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
"
;


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
K
i
c
k
e
r
C
l
s
 
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
2
 
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
;


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
T
i
t
l
e
C
l
s
 
=


 
 
"
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
;




f
u
n
c
t
i
o
n
 
C
a
r
d
H
e
a
d
e
r
(
{


 
 
k
i
c
k
e
r
,


 
 
t
i
t
l
e
,


 
 
r
i
g
h
t
,


}
:
 
{


 
 
k
i
c
k
e
r
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


 
 
r
i
g
h
t
?
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;


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
b
e
t
w
e
e
n
 
g
a
p
-
3
 
p
x
-
5
 
p
y
-
3
.
5
 
b
o
r
d
e
r
-
b
 
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
s
e
c
t
i
o
n
K
i
c
k
e
r
C
l
s
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
 
/
>


 
 
 
 
 
 
 
 
 
 
{
k
i
c
k
e
r
}


 
 
 
 
 
 
 
 
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
s
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
C
l
s
}
>
{
t
i
t
l
e
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


 
 
 
 
 
 
{
r
i
g
h
t
 
&
&
 
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
r
i
g
h
t
}
<
/
d
i
v
>
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




c
o
n
s
t
 
g
h
o
s
t
B
t
n
C
l
s
 
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
.
5
 
p
x
-
3
 
p
y
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
s
t
o
n
e
-
3
0
0
 
b
g
-
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
5
 
h
o
v
e
r
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
1
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
g
-
w
h
i
t
e
/
5
 
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
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"
;


c
o
n
s
t
 
l
i
m
e
B
t
n
C
l
s
 
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
.
5
 
p
x
-
3
 
p
y
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
5
0
 
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
 
h
o
v
e
r
:
b
g
-
l
i
m
e
-
3
0
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
 
b
o
r
d
e
r
-
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"
;


c
o
n
s
t
 
d
a
r
k
B
t
n
C
l
s
 
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
.
5
 
p
x
-
3
 
p
y
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
9
0
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
9
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
t
o
n
e
-
5
0
 
h
o
v
e
r
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
8
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
g
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
 
b
o
r
d
e
r
-
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"
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
 
f
u
n
c
t
i
o
n
 
L
a
t
e
x
R
e
s
u
m
e
E
d
i
t
o
r
(
)
 
{


 
 
c
o
n
s
t
 
l
o
c
a
t
i
o
n
 
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
 
[
s
e
a
r
c
h
P
a
r
a
m
s
,
 
s
e
t
S
e
a
r
c
h
P
a
r
a
m
s
]
 
=
 
u
s
e
S
e
a
r
c
h
P
a
r
a
m
s
(
)
;


 
 
c
o
n
s
t
 
t
e
m
p
l
a
t
e
I
d
 
=
 
s
e
a
r
c
h
P
a
r
a
m
s
.
g
e
t
(
"
t
e
m
p
l
a
t
e
"
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
D
a
r
k
,
 
s
e
t
I
s
D
a
r
k
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
(
)
 
=
>
 
d
o
c
u
m
e
n
t
.
d
o
c
u
m
e
n
t
E
l
e
m
e
n
t
.
c
l
a
s
s
L
i
s
t
.
c
o
n
t
a
i
n
s
(
"
d
a
r
k
"
)
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


 
 
 
 
c
o
n
s
t
 
o
b
s
e
r
v
e
r
 
=
 
n
e
w
 
M
u
t
a
t
i
o
n
O
b
s
e
r
v
e
r
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
I
s
D
a
r
k
(
d
o
c
u
m
e
n
t
.
d
o
c
u
m
e
n
t
E
l
e
m
e
n
t
.
c
l
a
s
s
L
i
s
t
.
c
o
n
t
a
i
n
s
(
"
d
a
r
k
"
)
)
;


 
 
 
 
}
)
;


 
 
 
 
o
b
s
e
r
v
e
r
.
o
b
s
e
r
v
e
(
d
o
c
u
m
e
n
t
.
d
o
c
u
m
e
n
t
E
l
e
m
e
n
t
,
 
{
 
a
t
t
r
i
b
u
t
e
s
:
 
t
r
u
e
,
 
a
t
t
r
i
b
u
t
e
F
i
l
t
e
r
:
 
[
"
c
l
a
s
s
"
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
 
(
)
 
=
>
 
o
b
s
e
r
v
e
r
.
d
i
s
c
o
n
n
e
c
t
(
)
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
e
m
p
l
a
t
e
O
v
e
r
r
i
d
e
 
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
 
{


 
 
 
 
i
f
 
(
l
o
c
a
t
i
o
n
.
s
t
a
t
e
?
.
i
n
i
t
i
a
l
L
a
t
e
x
)
 
{


 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
c
o
d
e
:
 
l
o
c
a
t
i
o
n
.
s
t
a
t
e
.
i
n
i
t
i
a
l
L
a
t
e
x
,
 
f
i
l
e
s
:
 
[
]
 
}
;


 
 
 
 
}


 
 
 
 
i
f
 
(
!
t
e
m
p
l
a
t
e
I
d
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
 
t
m
p
l
 
=
 
g
e
t
L
a
t
e
x
T
e
m
p
l
a
t
e
(
t
e
m
p
l
a
t
e
I
d
)
;


 
 
 
 
i
f
 
(
!
t
m
p
l
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


 
 
 
 
r
e
t
u
r
n
 
{
 
c
o
d
e
:
 
t
m
p
l
.
s
o
u
r
c
e
,
 
f
i
l
e
s
:
 
t
m
p
l
.
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
 
}
;


 
 
}
,
 
[
t
e
m
p
l
a
t
e
I
d
,
 
l
o
c
a
t
i
o
n
.
s
t
a
t
e
]
)
;




 
 
c
o
n
s
t
 
{
 
c
o
d
e
,
 
s
e
t
C
o
d
e
,
 
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
,
 
s
e
t
S
u
p
p
o
r
t
i
n
g
F
i
l
e
s
 
}
 
=
 
u
s
e
L
a
t
e
x
A
u
t
o
S
a
v
e
(


 
 
 
 
D
E
F
A
U
L
T
_
T
E
M
P
L
A
T
E
,


 
 
 
 
t
e
m
p
l
a
t
e
O
v
e
r
r
i
d
e
,


 
 
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


 
 
 
 
i
f
 
(
t
e
m
p
l
a
t
e
I
d
)
 
s
e
t
S
e
a
r
c
h
P
a
r
a
m
s
(
{
}
,
 
{
 
r
e
p
l
a
c
e
:
 
t
r
u
e
 
}
)
;


 
 
 
 
i
f
 
(
l
o
c
a
t
i
o
n
.
s
t
a
t
e
?
.
i
n
i
t
i
a
l
L
a
t
e
x
)
 
{


 
 
 
 
 
 
w
i
n
d
o
w
.
h
i
s
t
o
r
y
.
r
e
p
l
a
c
e
S
t
a
t
e
(
{
}
,
 
d
o
c
u
m
e
n
t
.
t
i
t
l
e
)
;


 
 
 
 
}


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
e
x
h
a
u
s
t
i
v
e
-
d
e
p
s


 
 
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
 
[
m
o
b
i
l
e
V
i
e
w
,
 
s
e
t
M
o
b
i
l
e
V
i
e
w
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
"
e
d
i
t
o
r
"
 
|
 
"
p
r
e
v
i
e
w
"
>
(
"
e
d
i
t
o
r
"
)
;


 
 
c
o
n
s
t
 
[
c
h
a
t
O
p
e
n
,
 
s
e
t
C
h
a
t
O
p
e
n
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
f
i
l
e
s
O
p
e
n
,
 
s
e
t
F
i
l
e
s
O
p
e
n
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
n
e
w
F
i
l
e
N
a
m
e
,
 
s
e
t
N
e
w
F
i
l
e
N
a
m
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
"
)
;


 
 
c
o
n
s
t
 
[
e
d
i
t
i
n
g
F
i
l
e
I
d
x
,
 
s
e
t
E
d
i
t
i
n
g
F
i
l
e
I
d
x
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
n
u
m
b
e
r
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
f
i
l
e
L
i
s
t
C
o
l
l
a
p
s
e
d
,
 
s
e
t
F
i
l
e
L
i
s
t
C
o
l
l
a
p
s
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
 
f
i
l
e
I
n
p
u
t
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
u
s
e
r
 
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
(
s
)
 
=
>
 
s
.
u
s
e
r
)
;


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;


 
 
c
o
n
s
t
 
i
s
P
r
e
m
i
u
m
 
=


 
 
 
 
(
u
s
e
r
?
.
s
u
b
s
c
r
i
p
t
i
o
n
P
l
a
n
 
=
=
=
 
"
M
O
N
T
H
L
Y
"
 
|
|
 
u
s
e
r
?
.
s
u
b
s
c
r
i
p
t
i
o
n
P
l
a
n
 
=
=
=
 
"
Y
E
A
R
L
Y
"
)
 
&
&


 
 
 
 
u
s
e
r
?
.
s
u
b
s
c
r
i
p
t
i
o
n
S
t
a
t
u
s
 
=
=
=
 
"
A
C
T
I
V
E
"
;




 
 
c
o
n
s
t
 
h
i
s
t
o
r
y
R
e
f
 
=
 
u
s
e
R
e
f
<
s
t
r
i
n
g
[
]
>
(
[
c
o
d
e
]
)
;


 
 
c
o
n
s
t
 
h
i
s
t
o
r
y
P
o
s
R
e
f
 
=
 
u
s
e
R
e
f
(
0
)
;


 
 
c
o
n
s
t
 
s
k
i
p
H
i
s
t
o
r
y
R
e
f
 
=
 
u
s
e
R
e
f
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
h
i
s
t
o
r
y
S
t
a
t
e
,
 
s
e
t
H
i
s
t
o
r
y
S
t
a
t
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
{
 
p
o
s
:
 
0
,
 
l
e
n
g
t
h
:
 
1
 
}
)
;




 
 
c
o
n
s
t
 
p
u
s
h
H
i
s
t
o
r
y
 
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
v
a
l
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


 
 
 
 
i
f
 
(
s
k
i
p
H
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
h
i
s
t
o
r
y
 
=
 
h
i
s
t
o
r
y
R
e
f
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
 
h
i
s
t
o
r
y
P
o
s
R
e
f
.
c
u
r
r
e
n
t
;


 
 
 
 
h
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
 
=
 
h
i
s
t
o
r
y
.
s
l
i
c
e
(
0
,
 
p
o
s
 
+
 
1
)
;


 
 
 
 
h
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
.
p
u
s
h
(
v
a
l
)
;


 
 
 
 
i
f
 
(
h
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
.
l
e
n
g
t
h
 
>
 
5
0
)
 
h
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
.
s
h
i
f
t
(
)
;


 
 
 
 
h
i
s
t
o
r
y
P
o
s
R
e
f
.
c
u
r
r
e
n
t
 
=
 
h
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
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
H
i
s
t
o
r
y
S
t
a
t
e
(
{
 
p
o
s
:
 
h
i
s
t
o
r
y
P
o
s
R
e
f
.
c
u
r
r
e
n
t
,
 
l
e
n
g
t
h
:
 
h
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
.
l
e
n
g
t
h
 
}
)
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
 
h
a
n
d
l
e
C
o
d
e
C
h
a
n
g
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
v
a
l
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


 
 
 
 
s
e
t
C
o
d
e
(
v
a
l
)
;


 
 
 
 
p
u
s
h
H
i
s
t
o
r
y
(
v
a
l
)
;


 
 
}
,
 
[
s
e
t
C
o
d
e
,
 
p
u
s
h
H
i
s
t
o
r
y
]
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
U
n
d
o
 
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
)
 
=
>
 
{


 
 
 
 
i
f
 
(
h
i
s
t
o
r
y
P
o
s
R
e
f
.
c
u
r
r
e
n
t
 
<
=
 
0
)
 
r
e
t
u
r
n
;


 
 
 
 
h
i
s
t
o
r
y
P
o
s
R
e
f
.
c
u
r
r
e
n
t
 
-
=
 
1
;


 
 
 
 
s
k
i
p
H
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
 
=
 
t
r
u
e
;


 
 
 
 
s
e
t
C
o
d
e
(
h
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
[
h
i
s
t
o
r
y
P
o
s
R
e
f
.
c
u
r
r
e
n
t
]
)
;


 
 
 
 
s
k
i
p
H
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
 
=
 
f
a
l
s
e
;


 
 
 
 
s
e
t
H
i
s
t
o
r
y
S
t
a
t
e
(
{
 
p
o
s
:
 
h
i
s
t
o
r
y
P
o
s
R
e
f
.
c
u
r
r
e
n
t
,
 
l
e
n
g
t
h
:
 
h
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
.
l
e
n
g
t
h
 
}
)
;


 
 
}
,
 
[
s
e
t
C
o
d
e
]
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
R
e
d
o
 
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
)
 
=
>
 
{


 
 
 
 
i
f
 
(
h
i
s
t
o
r
y
P
o
s
R
e
f
.
c
u
r
r
e
n
t
 
>
=
 
h
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
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
 
r
e
t
u
r
n
;


 
 
 
 
h
i
s
t
o
r
y
P
o
s
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
 
 
s
k
i
p
H
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
 
=
 
t
r
u
e
;


 
 
 
 
s
e
t
C
o
d
e
(
h
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
[
h
i
s
t
o
r
y
P
o
s
R
e
f
.
c
u
r
r
e
n
t
]
)
;


 
 
 
 
s
k
i
p
H
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
 
=
 
f
a
l
s
e
;


 
 
 
 
s
e
t
H
i
s
t
o
r
y
S
t
a
t
e
(
{
 
p
o
s
:
 
h
i
s
t
o
r
y
P
o
s
R
e
f
.
c
u
r
r
e
n
t
,
 
l
e
n
g
t
h
:
 
h
i
s
t
o
r
y
R
e
f
.
c
u
r
r
e
n
t
.
l
e
n
g
t
h
 
}
)
;


 
 
}
,
 
[
s
e
t
C
o
d
e
]
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
A
p
p
l
y
C
o
d
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
n
e
w
C
o
d
e
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


 
 
 
 
s
e
t
C
o
d
e
(
n
e
w
C
o
d
e
)
;


 
 
 
 
p
u
s
h
H
i
s
t
o
r
y
(
n
e
w
C
o
d
e
)
;


 
 
}
,
 
[
s
e
t
C
o
d
e
,
 
p
u
s
h
H
i
s
t
o
r
y
]
)
;




 
 
c
o
n
s
t
 
[
p
d
f
U
r
l
,
 
s
e
t
P
d
f
U
r
l
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
>
(
n
u
l
l
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
i
l
i
n
g
,
 
s
e
t
C
o
m
p
i
l
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
p
r
e
v
i
e
w
E
r
r
o
r
,
 
s
e
t
P
r
e
v
i
e
w
E
r
r
o
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
<
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
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
p
r
e
v
B
l
o
b
U
r
l
 
=
 
u
s
e
R
e
f
<
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
>
(
n
u
l
l
)
;




 
 
c
o
n
s
t
 
m
i
s
s
i
n
g
F
i
l
e
 
=
 
p
r
e
v
i
e
w
E
r
r
o
r
?
.
m
a
t
c
h
(
/
F
i
l
e
 
[
`
'
]
(
[
^
'
`
]
+
)
[
'
`
]
\
s
*
n
o
t
 
f
o
u
n
d
/
i
)
?
.
[
1
]
 
?
?
 
n
u
l
l
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
f
 
(
p
r
e
v
B
l
o
b
U
r
l
.
c
u
r
r
e
n
t
)
 
U
R
L
.
r
e
v
o
k
e
O
b
j
e
c
t
U
R
L
(
p
r
e
v
B
l
o
b
U
r
l
.
c
u
r
r
e
n
t
)
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
 
h
a
s
A
u
t
o
C
o
m
p
i
l
e
d
 
=
 
u
s
e
R
e
f
(
f
a
l
s
e
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


 
 
 
 
i
f
 
(
h
a
s
A
u
t
o
C
o
m
p
i
l
e
d
.
c
u
r
r
e
n
t
 
|
|
 
!
c
o
d
e
)
 
r
e
t
u
r
n
;


 
 
 
 
h
a
s
A
u
t
o
C
o
m
p
i
l
e
d
.
c
u
r
r
e
n
t
 
=
 
t
r
u
e
;


 
 
 
 
s
e
t
C
o
m
p
i
l
i
n
g
(
t
r
u
e
)
;


 
 
 
 
s
e
t
P
r
e
v
i
e
w
E
r
r
o
r
(
n
u
l
l
)
;


 
 
 
 
a
p
i


 
 
 
 
 
 
.
p
o
s
t
(
"
/
l
a
t
e
x
/
c
o
m
p
i
l
e
"
,
 
{
 
s
o
u
r
c
e
:
 
c
o
d
e
,
 
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
 
}
,
 
{
 
r
e
s
p
o
n
s
e
T
y
p
e
:
 
"
b
l
o
b
"
 
}
)


 
 
 
 
 
 
.
t
h
e
n
(
(
r
e
s
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
p
r
e
v
B
l
o
b
U
r
l
.
c
u
r
r
e
n
t
)
 
U
R
L
.
r
e
v
o
k
e
O
b
j
e
c
t
U
R
L
(
p
r
e
v
B
l
o
b
U
r
l
.
c
u
r
r
e
n
t
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
u
r
l
 
=
 
U
R
L
.
c
r
e
a
t
e
O
b
j
e
c
t
U
R
L
(
r
e
s
.
d
a
t
a
 
a
s
 
B
l
o
b
)
;


 
 
 
 
 
 
 
 
p
r
e
v
B
l
o
b
U
r
l
.
c
u
r
r
e
n
t
 
=
 
u
r
l
;


 
 
 
 
 
 
 
 
s
e
t
P
d
f
U
r
l
(
u
r
l
)
;


 
 
 
 
 
 
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
e
r
r
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
o
l
e
.
e
r
r
o
r
(
"
A
u
t
o
-
c
o
m
p
i
l
e
 
e
r
r
o
r
:
"
,
 
e
r
r
)
;


 
 
 
 
 
 
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
 
s
e
t
C
o
m
p
i
l
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
)
;


 
 
}
,
 
[
c
o
d
e
,
 
s
u
p
p
o
r
t
i
n
g
F
i
l
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
 
h
a
n
d
l
e
C
o
m
p
i
l
e
 
=
 
a
s
y
n
c
 
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
i
l
i
n
g
(
t
r
u
e
)
;


 
 
 
 
s
e
t
P
r
e
v
i
e
w
E
r
r
o
r
(
n
u
l
l
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
=
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
(


 
 
 
 
 
 
 
 
"
/
l
a
t
e
x
/
c
o
m
p
i
l
e
"
,


 
 
 
 
 
 
 
 
{
 
s
o
u
r
c
e
:
 
c
o
d
e
,
 
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
 
}
,


 
 
 
 
 
 
 
 
{
 
r
e
s
p
o
n
s
e
T
y
p
e
:
 
"
b
l
o
b
"
 
}
,


 
 
 
 
 
 
)
;


 
 
 
 
 
 
i
f
 
(
p
r
e
v
B
l
o
b
U
r
l
.
c
u
r
r
e
n
t
)
 
U
R
L
.
r
e
v
o
k
e
O
b
j
e
c
t
U
R
L
(
p
r
e
v
B
l
o
b
U
r
l
.
c
u
r
r
e
n
t
)
;


 
 
 
 
 
 
c
o
n
s
t
 
u
r
l
 
=
 
U
R
L
.
c
r
e
a
t
e
O
b
j
e
c
t
U
R
L
(
r
e
s
.
d
a
t
a
 
a
s
 
B
l
o
b
)
;


 
 
 
 
 
 
p
r
e
v
B
l
o
b
U
r
l
.
c
u
r
r
e
n
t
 
=
 
u
r
l
;


 
 
 
 
 
 
s
e
t
P
d
f
U
r
l
(
u
r
l
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
l
e
t
 
m
s
g
 
=
 
"
C
o
m
p
i
l
a
t
i
o
n
 
f
a
i
l
e
d
.
 
P
l
e
a
s
e
 
c
h
e
c
k
 
y
o
u
r
 
L
a
T
e
X
 
s
y
n
t
a
x
.
"
;


 
 
 
 
 
 
l
e
t
 
d
e
t
a
i
l
s
 
=
 
"
"
;


 
 
 
 
 
 
i
f
 
(
e
r
r
 
&
&
 
t
y
p
e
o
f
 
e
r
r
 
=
=
=
 
"
o
b
j
e
c
t
"
 
&
&
 
"
r
e
s
p
o
n
s
e
"
 
i
n
 
e
r
r
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
p
 
=
 
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
B
l
o
b
;
 
s
t
a
t
u
s
?
:
 
n
u
m
b
e
r
 
}
 
}
;


 
 
 
 
 
 
 
 
i
f
 
(
r
e
s
p
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
d
a
t
a
 
i
n
s
t
a
n
c
e
o
f
 
B
l
o
b
)
 
{


 
 
 
 
 
 
 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
e
x
t
 
=
 
a
w
a
i
t
 
r
e
s
p
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
d
a
t
a
.
t
e
x
t
(
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
 
J
S
O
N
.
p
a
r
s
e
(
t
e
x
t
)
;


 
 
 
 
 
 
 
 
 
 
 
 
m
s
g
 
=
 
p
a
r
s
e
d
.
m
e
s
s
a
g
e
 
|
|
 
m
s
g
;


 
 
 
 
 
 
 
 
 
 
 
 
d
e
t
a
i
l
s
 
=
 
p
a
r
s
e
d
.
d
e
t
a
i
l
s
 
|
|
 
"
"
;


 
 
 
 
 
 
 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
i
g
n
o
r
e
 
p
a
r
s
e
 
e
r
r
o
r


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
 
 
s
e
t
P
r
e
v
i
e
w
E
r
r
o
r
(
d
e
t
a
i
l
s
 
?
 
`
$
{
m
s
g
}
\
n
\
n
$
{
d
e
t
a
i
l
s
}
`
 
:
 
m
s
g
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
C
o
m
p
i
l
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
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
D
o
w
n
l
o
a
d
P
d
f
 
=
 
a
s
y
n
c
 
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
i
l
i
n
g
(
t
r
u
e
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
=
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
(


 
 
 
 
 
 
 
 
"
/
l
a
t
e
x
/
c
o
m
p
i
l
e
"
,


 
 
 
 
 
 
 
 
{
 
s
o
u
r
c
e
:
 
c
o
d
e
,
 
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
 
}
,


 
 
 
 
 
 
 
 
{
 
r
e
s
p
o
n
s
e
T
y
p
e
:
 
"
b
l
o
b
"
 
}
,


 
 
 
 
 
 
)
;


 
 
 
 
 
 
c
o
n
s
t
 
u
r
l
 
=
 
U
R
L
.
c
r
e
a
t
e
O
b
j
e
c
t
U
R
L
(
r
e
s
.
d
a
t
a
 
a
s
 
B
l
o
b
)
;


 
 
 
 
 
 
c
o
n
s
t
 
a
 
=
 
d
o
c
u
m
e
n
t
.
c
r
e
a
t
e
E
l
e
m
e
n
t
(
"
a
"
)
;


 
 
 
 
 
 
a
.
h
r
e
f
 
=
 
u
r
l
;


 
 
 
 
 
 
a
.
d
o
w
n
l
o
a
d
 
=
 
"
r
e
s
u
m
e
.
p
d
f
"
;


 
 
 
 
 
 
a
.
c
l
i
c
k
(
)
;


 
 
 
 
 
 
U
R
L
.
r
e
v
o
k
e
O
b
j
e
c
t
U
R
L
(
u
r
l
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
l
e
t
 
m
s
g
 
=
 
"
C
o
m
p
i
l
a
t
i
o
n
 
f
a
i
l
e
d
.
 
P
l
e
a
s
e
 
c
h
e
c
k
 
y
o
u
r
 
L
a
T
e
X
 
s
y
n
t
a
x
.
"
;


 
 
 
 
 
 
i
f
 
(
e
r
r
 
&
&
 
t
y
p
e
o
f
 
e
r
r
 
=
=
=
 
"
o
b
j
e
c
t
"
 
&
&
 
"
r
e
s
p
o
n
s
e
"
 
i
n
 
e
r
r
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
p
 
=
 
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
;


 
 
 
 
 
 
 
 
m
s
g
 
=
 
r
e
s
p
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
d
a
t
a
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
 
m
s
g
;


 
 
 
 
 
 
}


 
 
 
 
 
 
s
e
t
P
r
e
v
i
e
w
E
r
r
o
r
(
m
s
g
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
C
o
m
p
i
l
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
6
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
L
a
T
e
X
 
R
e
s
u
m
e
 
E
d
i
t
o
r
"
 
n
o
I
n
d
e
x
 
/
>




 
 
 
 
 
 
{
l
o
c
a
t
i
o
n
.
s
t
a
t
e
?
.
b
a
n
n
e
r
 
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
t
-
6
 
p
-
4
 
b
g
-
l
i
m
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
l
i
m
e
-
9
0
0
/
2
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
l
i
m
e
-
9
0
0
/
5
0
 
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
l
i
m
e
-
3
0
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
s
t
a
r
t
 
g
a
p
-
3
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
W
a
n
d
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
l
i
m
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
l
i
m
e
-
4
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
 
m
t
-
0
.
5
"
 
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
l
o
c
a
t
i
o
n
.
s
t
a
t
e
.
b
a
n
n
e
r
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
}




 
 
 
 
 
 
{
/
*
 
─
─
─
 
E
d
i
t
o
r
i
a
l
 
h
e
a
d
e
r
 
─
─
─
 
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
 
1
6
 
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
m
t
-
6
 
m
b
-
1
0
 
f
l
e
x
 
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
 
g
a
p
-
4
 
b
o
r
d
e
r
-
b
 
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
 
p
b
-
8
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
r
e
s
u
m
e
 
/
 
l
a
t
e
x
 
e
d
i
t
o
r
<
/
K
i
c
k
e
r
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
m
t
-
4
 
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
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
W
r
i
t
e
 
L
a
T
e
X
.


 
 
 
 
 
 
 
 
 
 
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
m
t
-
3
 
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
5
0
0
 
m
a
x
-
w
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
W
r
i
t
e
 
L
a
T
e
X
 
o
n
 
t
h
e
 
l
e
f
t
,
 
s
e
e
 
t
h
e
 
P
D
F
 
o
n
 
t
h
e
 
r
i
g
h
t
.
 
U
p
l
o
a
d
 
s
u
p
p
o
r
t
i
n
g
 
f
i
l
e
s
 
o
r
 
c
h
a
t
 
w
i
t
h
 
A
I
 
t
o
 
r
e
f
i
n
e
 
y
o
u
r
 
r
e
s
u
m
e
.


 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
h
a
n
d
l
e
C
o
m
p
i
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
c
o
m
p
i
l
i
n
g
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
d
a
r
k
B
t
n
C
l
s
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
m
p
i
l
i
n
g
 
?
 
<
L
o
a
d
e
r
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
3
.
5
 
h
-
3
.
5
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>
 
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
3
.
5
 
h
-
3
.
5
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
m
p
i
l
i
n
g
 
?
 
"
C
o
m
p
i
l
i
n
g
.
.
.
"
 
:
 
"
C
o
m
p
i
l
e
"
}


 
 
 
 
 
 
 
 
 
 
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
h
a
n
d
l
e
D
o
w
n
l
o
a
d
P
d
f
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
c
o
m
p
i
l
i
n
g
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
l
i
m
e
B
t
n
C
l
s
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
D
o
w
n
l
o
a
d
 
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
.
5
 
h
-
3
.
5
"
 
/
>
 
D
o
w
n
l
o
a
d
 
P
D
F


 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
<
A
t
s
T
o
o
l
s
N
a
v
 
/
>




 
 
 
 
 
 
{
/
*
 
─
─
─
 
S
e
c
o
n
d
a
r
y
 
t
o
o
l
b
a
r
 
─
─
─
 
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
 
8
 
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
3
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
{
`
$
{
c
a
r
d
C
l
s
}
 
m
b
-
5
`
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
 
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
M
o
b
i
l
e
 
p
a
n
e
l
 
t
o
g
g
l
e
 
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
 
l
g
:
h
i
d
d
e
n
 
g
a
p
-
p
x
 
b
g
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
g
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
)
 
=
>
 
s
e
t
M
o
b
i
l
e
V
i
e
w
(
"
e
d
i
t
o
r
"
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
{
`
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
 
t
e
x
t
-
[
1
1
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
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
o
r
d
e
r
-
0
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
b
i
l
e
V
i
e
w
 
=
=
=
 
"
e
d
i
t
o
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
9
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
t
o
n
e
-
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
l
e
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
3
 
h
-
3
 
i
n
l
i
n
e
 
m
r
-
1
"
 
/
>
 
e
d
i
t
o
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
)
 
=
>
 
s
e
t
M
o
b
i
l
e
V
i
e
w
(
"
p
r
e
v
i
e
w
"
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
{
`
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
 
t
e
x
t
-
[
1
1
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
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
o
r
d
e
r
-
0
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
b
i
l
e
V
i
e
w
 
=
=
=
 
"
p
r
e
v
i
e
w
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
9
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
t
o
n
e
-
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
y
e
 
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
 
i
n
l
i
n
e
 
m
r
-
1
"
 
/
>
 
p
r
e
v
i
e
w


 
 
 
 
 
 
 
 
 
 
 
 
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
C
o
p
y
B
u
t
t
o
n
 
t
e
x
t
=
{
c
o
d
e
}
 
/
>




 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
h
a
n
d
l
e
U
n
d
o
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
h
i
s
t
o
r
y
S
t
a
t
e
.
p
o
s
 
<
=
 
0
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
g
h
o
s
t
B
t
n
C
l
s
}


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
U
n
d
o
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
U
n
d
o
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
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
h
a
n
d
l
e
R
e
d
o
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
h
i
s
t
o
r
y
S
t
a
t
e
.
p
o
s
 
>
=
 
h
i
s
t
o
r
y
S
t
a
t
e
.
l
e
n
g
t
h
 
-
 
1
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
g
h
o
s
t
B
t
n
C
l
s
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
d
o
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
d
o
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
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
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
l
-
a
u
t
o
 
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
a
t
s
/
l
a
t
e
x
-
t
e
m
p
l
a
t
e
s
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
{
`
$
{
g
h
o
s
t
B
t
n
C
l
s
}
 
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
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
a
y
o
u
t
G
r
i
d
 
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
.
5
 
h
-
3
.
5
"
 
/
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
h
i
d
d
e
n
 
s
m
:
i
n
l
i
n
e
"
>
T
e
m
p
l
a
t
e
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
)
 
=
>
 
s
e
t
F
i
l
e
s
O
p
e
n
(
!
f
i
l
e
s
O
p
e
n
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
{
`
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
.
5
 
p
x
-
3
 
p
y
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
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
o
r
d
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
e
s
O
p
e
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
l
i
m
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
l
i
m
e
-
4
0
0
/
1
0
 
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
-
l
i
m
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
l
i
m
e
-
4
0
0
/
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
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
s
t
o
n
e
-
3
0
0
 
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
5
 
h
o
v
e
r
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
1
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
g
-
w
h
i
t
e
/
5
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
S
u
p
p
o
r
t
i
n
g
 
f
i
l
e
s
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
l
e
C
o
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
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
h
i
d
d
e
n
 
s
m
:
i
n
l
i
n
e
"
>
F
i
l
e
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
u
p
p
o
r
t
i
n
g
F
i
l
e
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
m
o
n
o
 
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
5
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
s
t
o
n
e
-
9
0
0
 
p
x
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
.
l
e
n
g
t
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
u
t
t
o
n
>




 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
i
s
P
r
e
m
i
u
m
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
A
I
 
A
s
s
i
s
t
a
n
t
 
i
s
 
a
 
P
r
e
m
i
u
m
 
f
e
a
t
u
r
e
.
 
U
p
g
r
a
d
e
 
t
o
 
u
n
l
o
c
k
.
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
a
v
i
g
a
t
e
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
c
h
e
c
k
o
u
t
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
C
h
a
t
O
p
e
n
(
!
c
h
a
t
O
p
e
n
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
{
`
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
.
5
 
p
x
-
3
 
p
y
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
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
o
r
d
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
h
a
t
O
p
e
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
l
i
m
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
l
i
m
e
-
4
0
0
/
1
0
 
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
-
l
i
m
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
l
i
m
e
-
4
0
0
/
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
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
s
t
o
n
e
-
3
0
0
 
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
5
 
h
o
v
e
r
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
1
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
g
-
w
h
i
t
e
/
5
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
i
s
P
r
e
m
i
u
m
 
?
 
"
A
I
 
A
s
s
i
s
t
a
n
t
"
 
:
 
"
A
I
 
A
s
s
i
s
t
a
n
t
,
 
P
r
e
m
i
u
m
 
o
n
l
y
"
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
s
s
a
g
e
S
q
u
a
r
e
 
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
.
5
 
h
-
3
.
5
"
 
/
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
h
i
d
d
e
n
 
s
m
:
i
n
l
i
n
e
"
>
A
I
 
A
s
s
i
s
t
a
n
t
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
i
s
P
r
e
m
i
u
m
 
&
&
 
<
L
o
c
k
 
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
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
─
─
─
 
S
u
p
p
o
r
t
i
n
g
 
f
i
l
e
s
 
p
a
n
e
l
 
─
─
─
 
*
/
}


 
 
 
 
 
 
{
f
i
l
e
s
O
p
e
n
 
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
 
h
e
i
g
h
t
:
 
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
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
 
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
{
`
$
{
c
a
r
d
C
l
s
}
 
m
b
-
5
 
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
`
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
H
e
a
d
e
r


 
 
 
 
 
 
 
 
 
 
 
 
k
i
c
k
e
r
=
"
a
s
s
e
t
s
"


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
S
u
p
p
o
r
t
i
n
g
 
f
i
l
e
s
"


 
 
 
 
 
 
 
 
 
 
 
 
r
i
g
h
t
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
.
c
l
s
 
.
s
t
y
 
.
b
s
t
 
.
b
i
b
 
.
t
e
x


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
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
p
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
u
p
p
o
r
t
i
n
g
F
i
l
e
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
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
)
 
=
>
 
s
e
t
F
i
l
e
L
i
s
t
C
o
l
l
a
p
s
e
d
(
!
f
i
l
e
L
i
s
t
C
o
l
l
a
p
s
e
d
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
.
5
 
m
b
-
2
 
t
e
x
t
-
[
1
1
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
8
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
2
0
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
 
b
o
r
d
e
r
-
0
 
b
g
-
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
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
D
o
w
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
3
.
5
 
h
-
3
.
5
 
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
t
r
a
n
s
f
o
r
m
 
$
{
f
i
l
e
L
i
s
t
C
o
l
l
a
p
s
e
d
 
?
 
"
-
r
o
t
a
t
e
-
9
0
"
 
:
 
"
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
.
l
e
n
g
t
h
}
 
f
i
l
e
{
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
.
l
e
n
g
t
h
 
>
 
1
 
?
 
"
s
"
 
:
 
"
"
}
 
a
d
d
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
f
i
l
e
L
i
s
t
C
o
l
l
a
p
s
e
d
 
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
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
.
m
a
p
(
(
s
f
,
 
i
d
x
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
d
x
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
/
6
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
 
p
x
-
3
 
p
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
l
e
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
3
.
5
 
h
-
3
.
5
 
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
s
t
o
n
e
-
3
0
0
 
f
l
e
x
-
1
 
t
r
u
n
c
a
t
e
 
f
o
n
t
-
m
o
n
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
f
.
f
i
l
e
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
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
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
s
f
.
c
o
n
t
e
n
t
.
l
e
n
g
t
h
 
/
 
1
0
2
4
)
}
k
b


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
)
 
=
>
 
s
e
t
E
d
i
t
i
n
g
F
i
l
e
I
d
x
(
e
d
i
t
i
n
g
F
i
l
e
I
d
x
 
=
=
=
 
i
d
x
 
?
 
n
u
l
l
 
:
 
i
d
x
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
s
t
o
n
e
-
3
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
l
i
m
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
l
i
m
e
-
4
0
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
 
b
o
r
d
e
r
-
0
 
b
g
-
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
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
d
i
t
i
n
g
F
i
l
e
I
d
x
 
=
=
=
 
i
d
x
 
?
 
"
c
l
o
s
e
"
 
:
 
"
e
d
i
t
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
u
p
p
o
r
t
i
n
g
F
i
l
e
s
(
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
.
f
i
l
t
e
r
(
(
_
,
 
i
)
 
=
>
 
i
 
!
=
=
 
i
d
x
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
e
d
i
t
i
n
g
F
i
l
e
I
d
x
 
=
=
=
 
i
d
x
)
 
s
e
t
E
d
i
t
i
n
g
F
i
l
e
I
d
x
(
n
u
l
l
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
w
-
5
 
h
-
5
 
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
 
r
o
u
n
d
e
d
 
h
o
v
e
r
:
b
g
-
r
e
d
-
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
b
g
-
r
e
d
-
9
5
0
/
3
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
r
e
d
-
5
0
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
 
b
o
r
d
e
r
-
0
 
b
g
-
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
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
d
i
t
i
n
g
F
i
l
e
I
d
x
 
=
=
=
 
i
d
x
 
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
b
o
r
d
e
r
-
t
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
f
.
c
o
n
t
e
n
t
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
u
p
d
a
t
e
d
 
=
 
[
.
.
.
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
d
[
i
d
x
]
 
=
 
{
 
.
.
.
s
f
,
 
c
o
n
t
e
n
t
:
 
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
 
}
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
u
p
p
o
r
t
i
n
g
F
i
l
e
s
(
u
p
d
a
t
e
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
w
-
f
u
l
l
 
h
-
4
8
 
p
x
-
3
 
p
y
-
2
 
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
 
b
g
-
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
s
t
o
n
e
-
3
0
0
 
r
e
s
i
z
e
-
n
o
n
e
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
p
e
l
l
C
h
e
c
k
=
{
f
a
l
s
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
f
=
{
f
i
l
e
I
n
p
u
t
R
e
f
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
f
i
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
c
e
p
t
=
"
.
c
l
s
,
.
s
t
y
,
.
b
s
t
,
.
b
i
b
,
.
t
e
x
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
u
l
t
i
p
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
i
l
e
s
 
=
 
e
.
t
a
r
g
e
t
.
f
i
l
e
s
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
f
i
l
e
s
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
f
i
l
e
s
)
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
f
i
l
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
/
\
.
(
c
l
s
|
s
t
y
|
b
s
t
|
b
i
b
|
t
e
x
)
$
/
.
t
e
s
t
(
f
i
l
e
.
n
a
m
e
)
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
.
s
o
m
e
(
(
f
)
 
=
>
 
f
.
f
i
l
e
n
a
m
e
 
=
=
=
 
f
i
l
e
.
n
a
m
e
)
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
a
d
e
r
 
=
 
n
e
w
 
F
i
l
e
R
e
a
d
e
r
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
a
d
e
r
.
o
n
l
o
a
d
 
=
 
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
 
c
o
n
t
e
n
t
 
=
 
r
e
a
d
e
r
.
r
e
s
u
l
t
 
a
s
 
s
t
r
i
n
g
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
u
p
p
o
r
t
i
n
g
F
i
l
e
s
(
(
p
r
e
v
)
 
=
>
 
[
.
.
.
p
r
e
v
,
 
{
 
f
i
l
e
n
a
m
e
:
 
f
i
l
e
.
n
a
m
e
,
 
c
o
n
t
e
n
t
 
}
]
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
a
d
e
r
.
r
e
a
d
A
s
T
e
x
t
(
f
i
l
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
=
 
"
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
 
s
m
:
f
l
e
x
-
r
o
w
 
i
t
e
m
s
-
s
t
r
e
t
c
h
 
s
m
:
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
)
 
=
>
 
f
i
l
e
I
n
p
u
t
R
e
f
.
c
u
r
r
e
n
t
?
.
c
l
i
c
k
(
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
{
l
i
m
e
B
t
n
C
l
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
U
p
l
o
a
d
 
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
"
 
/
>
 
U
p
l
o
a
d
 
f
i
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
h
i
d
d
e
n
 
s
m
:
i
n
l
i
n
e
 
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
s
t
o
n
e
-
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
n
e
w
F
i
l
e
N
a
m
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
N
e
w
F
i
l
e
N
a
m
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
r
e
s
u
m
e
.
c
l
s
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
 
p
x
-
3
 
p
y
-
2
 
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
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
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
s
t
o
n
e
-
9
5
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
5
0
 
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
 
d
a
r
k
:
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
a
m
e
 
=
 
n
e
w
F
i
l
e
N
a
m
e
.
t
r
i
m
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
n
a
m
e
 
|
|
 
!
/
\
.
(
c
l
s
|
s
t
y
|
b
s
t
|
b
i
b
|
t
e
x
)
$
/
.
t
e
s
t
(
n
a
m
e
)
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
.
s
o
m
e
(
(
f
)
 
=
>
 
f
.
f
i
l
e
n
a
m
e
 
=
=
=
 
n
a
m
e
)
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
u
p
d
a
t
e
d
 
=
 
[
.
.
.
s
u
p
p
o
r
t
i
n
g
F
i
l
e
s
,
 
{
 
f
i
l
e
n
a
m
e
:
 
n
a
m
e
,
 
c
o
n
t
e
n
t
:
 
"
"
 
}
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
u
p
p
o
r
t
i
n
g
F
i
l
e
s
(
u
p
d
a
t
e
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
E
d
i
t
i
n
g
F
i
l
e
I
d
x
(
u
p
d
a
t
e
d
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
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
N
e
w
F
i
l
e
N
a
m
e
(
"
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
!
n
e
w
F
i
l
e
N
a
m
e
.
t
r
i
m
(
)
 
|
|
 
!
/
\
.
(
c
l
s
|
s
t
y
|
b
s
t
|
b
i
b
|
t
e
x
)
$
/
.
t
e
s
t
(
n
e
w
F
i
l
e
N
a
m
e
.
t
r
i
m
(
)
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
{
`
$
{
g
h
o
s
t
B
t
n
C
l
s
}
 
s
h
r
i
n
k
-
0
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
u
s
 
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
"
 
/
>
 
A
d
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
p
l
o
a
d
 
.
c
l
s
,
 
.
s
t
y
,
 
.
b
s
t
,
 
.
b
i
b
,
 
o
r
 
.
t
e
x
 
f
i
l
e
s
 
y
o
u
r
 
t
e
m
p
l
a
t
e
 
r
e
q
u
i
r
e
s
 
(
e
.
g
.
 
r
e
s
u
m
e
.
c
l
s
)
.


 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
─
─
─
 
S
p
l
i
t
 
p
a
n
e
 
─
─
─
 
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
 
1
2
 
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
4
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
5
 
}
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
 
l
g
:
f
l
e
x
-
r
o
w
 
g
a
p
-
5
 
h
-
[
8
5
v
h
]
 
l
g
:
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
8
0
p
x
)
]
 
m
i
n
-
h
-
1
2
0
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
E
d
i
t
o
r
 
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
{
`
l
g
:
w
-
1
/
2
 
$
{
c
a
r
d
C
l
s
}
 
f
l
e
x
-
c
o
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
h
i
d
d
e
n
 
m
i
n
-
h
-
0
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
b
i
l
e
V
i
e
w
 
=
=
=
 
"
p
r
e
v
i
e
w
"
 
?
 
"
h
i
d
d
e
n
 
l
g
:
f
l
e
x
"
 
:
 
"
f
l
e
x
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
H
e
a
d
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
i
c
k
e
r
=
"
s
o
u
r
c
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
L
a
T
e
X
 
e
d
i
t
o
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
i
g
h
t
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
i
m
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
p
r
o
f
e
s
s
i
o
n
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
e
x
-
1
 
o
v
e
r
f
l
o
w
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
M
i
r
r
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
c
o
d
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
h
a
n
d
l
e
C
o
d
e
C
h
a
n
g
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
t
e
n
s
i
o
n
s
=
{
[
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
h
e
m
e
=
{
i
s
D
a
r
k
 
?
 
"
d
a
r
k
"
 
:
 
"
l
i
g
h
t
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
s
i
c
S
e
t
u
p
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
i
n
e
N
u
m
b
e
r
s
:
 
t
r
u
e
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
l
d
G
u
t
t
e
r
:
 
t
r
u
e
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
r
a
c
k
e
t
M
a
t
c
h
i
n
g
:
 
t
r
u
e
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
A
c
t
i
v
e
L
i
n
e
:
 
t
r
u
e
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
u
t
o
c
o
m
p
l
e
t
i
o
n
:
 
f
a
l
s
e
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
h
e
i
g
h
t
:
 
"
1
0
0
%
"
,
 
f
o
n
t
S
i
z
e
:
 
"
1
4
p
x
"
 
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
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
r
e
v
i
e
w
 
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
{
`
l
g
:
w
-
1
/
2
 
$
{
c
a
r
d
C
l
s
}
 
f
l
e
x
-
c
o
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
h
i
d
d
e
n
 
m
i
n
-
h
-
0
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
b
i
l
e
V
i
e
w
 
=
=
=
 
"
e
d
i
t
o
r
"
 
?
 
"
h
i
d
d
e
n
 
l
g
:
f
l
e
x
"
 
:
 
"
f
l
e
x
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
H
e
a
d
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
i
c
k
e
r
=
"
o
u
t
p
u
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
P
D
F
 
p
r
e
v
i
e
w
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
i
g
h
t
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
m
p
i
l
i
n
g
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
a
d
e
r
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
3
 
h
-
3
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>
 
c
o
m
p
i
l
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
 
:
 
p
d
f
U
r
l
 
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
l
i
m
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
r
e
a
d
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
 
n
u
l
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
e
x
-
1
 
r
e
l
a
t
i
v
e
 
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
/
6
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
/
4
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
d
f
U
r
l
 
&
&
 
!
p
r
e
v
i
e
w
E
r
r
o
r
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
f
r
a
m
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
`
$
{
p
d
f
U
r
l
}
#
t
o
o
l
b
a
r
=
0
&
n
a
v
p
a
n
e
s
=
0
&
s
c
r
o
l
l
b
a
r
=
0
&
v
i
e
w
=
F
i
t
H
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
w
-
f
u
l
l
 
h
-
f
u
l
l
 
b
o
r
d
e
r
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
P
D
F
 
P
r
e
v
i
e
w
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
e
v
i
e
w
E
r
r
o
r
 
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
s
t
a
r
t
 
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
 
p
-
6
 
o
v
e
r
f
l
o
w
-
y
-
a
u
t
o
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
a
x
-
w
-
m
d
 
w
-
f
u
l
l
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
{
`
$
{
c
a
r
d
C
l
s
}
 
b
o
r
d
e
r
-
r
e
d
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
r
e
d
-
9
0
0
/
4
0
 
p
-
6
`
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
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
3
 
m
b
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
w
-
1
0
 
h
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
m
d
 
b
g
-
r
e
d
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
r
e
d
-
9
5
0
/
3
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
r
e
d
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
r
e
d
-
9
0
0
/
4
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
A
l
e
r
t
C
i
r
c
l
e
 
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
r
e
d
-
5
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
s
e
c
t
i
o
n
K
i
c
k
e
r
C
l
s
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
r
e
d
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
r
r
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
s
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
C
l
s
 
+
 
"
 
m
t
-
1
"
}
>
C
o
m
p
i
l
a
t
i
o
n
 
f
a
i
l
e
d
<
/
h
3
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
t
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
F
i
x
 
t
h
e
 
e
r
r
o
r
s
 
b
e
l
o
w
 
a
n
d
 
t
r
y
 
a
g
a
i
n
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
g
-
r
e
d
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
r
e
d
-
9
5
0
/
2
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
r
e
d
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
r
e
d
-
9
0
0
/
4
0
 
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
 
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
r
e
 
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
r
e
d
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
r
e
d
-
4
0
0
 
w
h
i
t
e
s
p
a
c
e
-
p
r
e
-
w
r
a
p
 
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
a
x
-
h
-
4
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
a
u
t
o
 
f
o
n
t
-
m
o
n
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
e
v
i
e
w
E
r
r
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
r
e
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
i
s
s
i
n
g
F
i
l
e
 
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
m
t
-
4
 
b
g
-
a
m
b
e
r
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
a
m
b
e
r
-
9
5
0
/
2
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
a
m
b
e
r
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
a
m
b
e
r
-
9
0
0
/
4
0
 
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
{
s
e
c
t
i
o
n
K
i
c
k
e
r
C
l
s
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
s
s
i
n
g
 
f
i
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
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
a
m
b
e
r
-
3
0
0
 
m
t
-
1
 
m
b
-
2
 
f
o
n
t
-
m
o
n
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
i
s
s
i
n
g
F
i
l
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
a
m
b
e
r
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
a
m
b
e
r
-
4
0
0
 
m
b
-
3
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
r
 
t
e
m
p
l
a
t
e
 
r
e
q
u
i
r
e
s
 
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
"
>
{
m
i
s
s
i
n
g
F
i
l
e
}
<
/
s
p
a
n
>
.
 
U
p
l
o
a
d
 
i
t
 
u
s
i
n
g
 
t
h
e
 
F
i
l
e
s
 
b
u
t
t
o
n
 
i
n
 
t
h
e
 
t
o
o
l
b
a
r
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
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
x
s
 
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
a
m
b
e
r
-
4
0
0
 
s
p
a
c
e
-
y
-
1
 
m
b
-
3
 
l
i
s
t
-
d
e
c
i
m
a
l
 
l
i
s
t
-
i
n
s
i
d
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>
C
l
i
c
k
 
t
h
e
 
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
"
>
F
i
l
e
s
<
/
s
p
a
n
>
 
b
u
t
t
o
n
 
a
b
o
v
e
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>
C
l
i
c
k
 
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
"
>
U
p
l
o
a
d
 
f
i
l
e
<
/
s
p
a
n
>
 
a
n
d
 
s
e
l
e
c
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
f
o
n
t
-
m
o
n
o
"
>
{
m
i
s
s
i
n
g
F
i
l
e
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
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>
C
l
i
c
k
 
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
"
>
C
o
m
p
i
l
e
<
/
s
p
a
n
>
 
a
g
a
i
n
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
o
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
F
i
l
e
s
O
p
e
n
(
t
r
u
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
r
e
v
i
e
w
E
r
r
o
r
(
n
u
l
l
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
.
5
 
p
x
-
3
 
p
y
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
 
b
g
-
a
m
b
e
r
-
6
0
0
 
h
o
v
e
r
:
b
g
-
a
m
b
e
r
-
7
0
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
 
b
o
r
d
e
r
-
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
U
p
l
o
a
d
 
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
"
 
/
>
 
O
p
e
n
 
f
i
l
e
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
)
 
=
>
 
s
e
t
P
r
e
v
i
e
w
E
r
r
o
r
(
n
u
l
l
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
{
`
m
t
-
4
 
w
-
f
u
l
l
 
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
g
h
o
s
t
B
t
n
C
l
s
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
i
s
m
i
s
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
p
d
f
U
r
l
 
&
&
 
!
p
r
e
v
i
e
w
E
r
r
o
r
 
&
&
 
!
c
o
m
p
i
l
i
n
g
 
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
c
e
n
t
e
r
 
m
a
x
-
w
-
x
s
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
w
-
1
6
 
h
-
1
6
 
b
g
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
 
m
b
-
5
 
m
x
-
a
u
t
o
 
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
7
 
h
-
7
 
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
"
 
/
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
1
 
-
r
i
g
h
t
-
1
 
h
-
2
 
w
-
2
 
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
{
s
e
c
t
i
o
n
K
i
c
k
e
r
C
l
s
 
+
 
"
 
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
 
m
b
-
2
"
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
"
t
e
x
t
-
l
g
 
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
a
d
y
 
t
o
 
c
o
m
p
i
l
e
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
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
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
l
i
c
k
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
m
p
i
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
 
r
e
n
d
e
r
 
y
o
u
r
 
L
a
T
e
X
 
s
o
u
r
c
e
 
a
s
 
a
 
P
D
F
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
p
d
f
U
r
l
 
&
&
 
c
o
m
p
i
l
i
n
g
 
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
r
e
l
a
t
i
v
e
 
w
-
1
6
 
h
-
1
6
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
-
t
-
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
r
o
t
a
t
e
:
 
3
6
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
 
1
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
 
}
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
 
h
-
5
 
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
5
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
{
s
e
c
t
i
o
n
K
i
c
k
e
r
C
l
s
 
+
 
"
 
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
 
m
b
-
2
"
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
m
p
i
l
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
s
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
C
l
s
}
>
R
e
n
d
e
r
i
n
g
 
L
a
T
e
X
<
/
h
3
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
t
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
h
i
s
 
u
s
u
a
l
l
y
 
t
a
k
e
s
 
a
 
f
e
w
 
s
e
c
o
n
d
s
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
{
c
h
a
t
O
p
e
n
 
&
&
 
i
s
P
r
e
m
i
u
m
 
&
&
 
(


 
 
 
 
 
 
 
 
<
L
a
t
e
x
C
h
a
t
P
a
n
e
l


 
 
 
 
 
 
 
 
 
 
c
o
d
e
=
{
c
o
d
e
}


 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
C
o
d
e
=
{
h
a
n
d
l
e
A
p
p
l
y
C
o
d
e
}


 
 
 
 
 
 
 
 
 
 
o
n
C
l
o
s
e
=
{
(
)
 
=
>
 
s
e
t
C
h
a
t
O
p
e
n
(
f
a
l
s
e
)
}


 
 
 
 
 
 
 
 
/
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


