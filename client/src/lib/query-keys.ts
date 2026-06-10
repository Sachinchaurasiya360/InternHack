
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
 
q
u
e
r
y
K
e
y
s
 
=
 
{


 
 
/
/
 
J
o
b
s


 
 
j
o
b
s
:
 
{


 
 
 
 
a
l
l
:
 
[
"
j
o
b
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
l
i
s
t
:
 
(
p
a
r
a
m
s
?
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
 
b
o
o
l
e
a
n
 
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
)
 
=
>


 
 
 
 
 
 
[
"
j
o
b
s
"
,
 
"
l
i
s
t
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
d
e
t
a
i
l
:
 
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
 
|
 
n
u
m
b
e
r
)
 
=
>
 
[
"
j
o
b
s
"
,
 
"
d
e
t
a
i
l
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
r
e
l
a
t
e
d
:
 
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
 
|
 
n
u
m
b
e
r
)
 
=
>
 
[
"
j
o
b
s
"
,
 
"
r
e
l
a
t
e
d
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,


 
 
s
a
v
e
d
J
o
b
s
:
 
{


 
 
 
 
a
l
l
:
 
[
"
s
a
v
e
d
-
j
o
b
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
l
i
s
t
:
 
(
)
 
=
>
 
[
"
s
a
v
e
d
-
j
o
b
s
"
,
 
"
l
i
s
t
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
c
h
e
c
k
:
 
(
j
o
b
I
d
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
m
b
e
r
)
 
=
>
 
[
"
s
a
v
e
d
-
j
o
b
s
"
,
 
"
c
h
e
c
k
"
,
 
j
o
b
I
d
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,


 
 
/
/
 
H
a
c
k
a
t
h
o
n
s


 
 
h
a
c
k
a
t
h
o
n
s
:
 
{


 
 
 
 
a
l
l
:
 
[
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
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
l
i
s
t
:
 
(
)
 
=
>
 
[
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
s
"
,
 
"
l
i
s
t
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
m
y
P
a
r
t
i
c
i
p
a
t
i
o
n
s
:
 
(
)
 
=
>
 
[
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
s
"
,
 
"
m
y
-
p
a
r
t
i
c
i
p
a
t
i
o
n
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
A
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
:
 
{


 
 
 
 
a
l
l
:
 
[
"
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
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
m
i
n
e
:
 
(
)
 
=
>
 
[
"
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
"
,
 
"
m
i
n
e
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
p
r
o
g
r
e
s
s
:
 
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
 
|
 
n
u
m
b
e
r
)
 
=
>


 
 
 
 
 
 
[
"
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
"
,
 
"
p
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
d
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
t
a
t
u
s
B
y
J
o
b
:
 
(
j
o
b
I
d
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
m
b
e
r
)
 
=
>


 
 
 
 
 
 
[
"
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
"
,
 
"
s
t
a
t
u
s
-
b
y
-
j
o
b
"
,
 
j
o
b
I
d
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
A
T
S


 
 
a
t
s
:
 
{


 
 
 
 
a
l
l
:
 
[
"
a
t
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
u
s
a
g
e
:
 
(
)
 
=
>
 
[
"
a
t
s
"
,
 
"
u
s
a
g
e
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
h
i
s
t
o
r
y
:
 
(
)
 
=
>
 
[
"
a
t
s
"
,
 
"
h
i
s
t
o
r
y
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,


 
 
c
o
v
e
r
L
e
t
t
e
r
:
 
{


 
 
h
i
s
t
o
r
y
:
 
(
)
 
 
 
 
 
 
 
 
 
 
 
=
>
 
[
"
c
o
v
e
r
-
l
e
t
t
e
r
"
,
 
"
h
i
s
t
o
r
y
"
]
 
a
s
 
c
o
n
s
t
,


 
 
d
e
t
a
i
l
:
 
 
(
i
d
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
 
[
"
c
o
v
e
r
-
l
e
t
t
e
r
"
,
 
"
d
e
t
a
i
l
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


}
,




 
 
/
/
 
C
o
m
p
a
n
i
e
s


 
 
c
o
m
p
a
n
i
e
s
:
 
{


 
 
 
 
a
l
l
:
 
[
"
c
o
m
p
a
n
i
e
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
l
i
s
t
:
 
(
p
a
r
a
m
s
?
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
)
 
=
>


 
 
 
 
 
 
[
"
c
o
m
p
a
n
i
e
s
"
,
 
"
l
i
s
t
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
c
i
t
i
e
s
:
 
(
)
 
=
>
 
[
"
c
o
m
p
a
n
i
e
s
"
,
 
"
c
i
t
i
e
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
d
e
t
a
i
l
:
 
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
 
|
 
n
u
m
b
e
r
)
 
=
>
 
[
"
c
o
m
p
a
n
i
e
s
"
,
 
"
d
e
t
a
i
l
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
r
e
v
i
e
w
s
:
 
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
 
|
 
n
u
m
b
e
r
)
 
=
>


 
 
 
 
 
 
[
"
c
o
m
p
a
n
i
e
s
"
,
 
"
r
e
v
i
e
w
s
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
A
d
m
i
n


 
 
a
d
m
i
n
:
 
{


 
 
 
 
d
a
s
h
b
o
a
r
d
:
 
(
)
 
=
>
 
[
"
a
d
m
i
n
"
,
 
"
d
a
s
h
b
o
a
r
d
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
u
s
e
r
s
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>


 
 
 
 
 
 
[
"
a
d
m
i
n
"
,
 
"
u
s
e
r
s
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
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
:
 
(
)
 
=
>
 
[
"
a
d
m
i
n
"
,
 
"
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
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
a
i
C
o
n
f
i
g
:
 
(
)
 
=
>
 
[
"
a
d
m
i
n
"
,
 
"
a
i
-
c
o
n
f
i
g
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
a
i
S
t
a
t
s
:
 
(
r
a
n
g
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
 
[
"
a
d
m
i
n
"
,
 
"
a
i
-
s
t
a
t
s
"
,
 
r
a
n
g
e
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
e
r
r
o
r
L
o
g
s
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>


 
 
 
 
 
 
[
"
a
d
m
i
n
"
,
 
"
e
r
r
o
r
-
l
o
g
s
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
P
r
o
f
i
l
e


 
 
p
r
o
f
i
l
e
:
 
{


 
 
 
 
m
e
:
 
(
)
 
=
>
 
[
"
p
r
o
f
i
l
e
"
,
 
"
m
e
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
S
t
a
t
s


 
 
s
t
a
t
s
:
 
{


 
 
 
 
l
a
n
d
i
n
g
:
 
(
)
 
=
>
 
[
"
s
t
a
t
s
"
,
 
"
l
a
n
d
i
n
g
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
R
e
c
r
u
i
t
e
r


 
 
r
e
c
r
u
i
t
e
r
:
 
{


 
 
 
 
t
a
l
e
n
t
S
e
a
r
c
h
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>


 
 
 
 
 
 
[
"
r
e
c
r
u
i
t
e
r
"
,
 
"
t
a
l
e
n
t
-
s
e
a
r
c
h
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
G
S
o
C


 
 
g
s
o
c
:
 
{


 
 
 
 
l
i
s
t
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>


 
 
 
 
 
 
[
"
g
s
o
c
"
,
 
"
l
i
s
t
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
d
e
t
a
i
l
:
 
(
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
)
 
=
>
 
[
"
g
s
o
c
"
,
 
"
d
e
t
a
i
l
"
,
 
s
l
u
g
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
t
a
t
s
:
 
(
)
 
=
>
 
[
"
g
s
o
c
"
,
 
"
s
t
a
t
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
r
e
p
o
s
:
 
(
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
)
 
=
>
 
[
"
g
s
o
c
"
,
 
"
r
e
p
o
s
"
,
 
s
l
u
g
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
Y
C
 
C
o
m
p
a
n
i
e
s


 
 
y
c
:
 
{


 
 
 
 
l
i
s
t
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>


 
 
 
 
 
 
[
"
y
c
"
,
 
"
l
i
s
t
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
d
e
t
a
i
l
:
 
(
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
)
 
=
>
 
[
"
y
c
"
,
 
"
d
e
t
a
i
l
"
,
 
s
l
u
g
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
t
a
t
s
:
 
(
)
 
=
>
 
[
"
y
c
"
,
 
"
s
t
a
t
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
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
 
{


 
 
 
 
a
l
l
:
 
[
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
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
l
i
s
t
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>


 
 
 
 
 
 
[
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
,
 
"
l
i
s
t
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
d
e
t
a
i
l
:
 
(
i
d
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
 
[
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
,
 
"
d
e
t
a
i
l
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
m
y
R
e
q
u
e
s
t
s
:
 
(
)
 
=
>
 
[
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
,
 
"
m
y
-
r
e
q
u
e
s
t
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
t
r
e
n
d
:
 
(
s
t
a
r
t
D
a
t
e
?
:
 
s
t
r
i
n
g
,
 
e
n
d
D
a
t
e
?
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
 
[
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
,
 
"
t
r
e
n
d
"
,
 
s
t
a
r
t
D
a
t
e
,
 
e
n
d
D
a
t
e
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
h
a
c
k
t
o
b
e
r
f
e
s
t
:
 
(
)
 
=
>
 
[
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
,
 
"
h
a
c
k
t
o
b
e
r
f
e
s
t
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
a
l
l
R
e
q
u
e
s
t
s
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>


 
 
 
 
 
 
[
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
,
 
"
a
l
l
-
r
e
q
u
e
s
t
s
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
t
a
t
s
:
 
(
)
 
=
>
 
[
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
,
 
"
s
t
a
t
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
b
o
o
k
m
a
r
k
s
:
 
(
)
 
=
>
 
[
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
,
 
"
b
o
o
k
m
a
r
k
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
B
l
o
g


 
 
b
l
o
g
:
 
{


 
 
 
 
l
i
s
t
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>


 
 
 
 
 
 
[
"
b
l
o
g
"
,
 
"
l
i
s
t
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
d
e
t
a
i
l
:
 
(
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
)
 
=
>
 
[
"
b
l
o
g
"
,
 
"
d
e
t
a
i
l
"
,
 
s
l
u
g
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
f
e
a
t
u
r
e
d
:
 
(
)
 
=
>
 
[
"
b
l
o
g
"
,
 
"
f
e
a
t
u
r
e
d
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
r
e
l
a
t
e
d
:
 
(
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
)
 
=
>
 
[
"
b
l
o
g
"
,
 
"
r
e
l
a
t
e
d
"
,
 
s
l
u
g
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
b
y
T
a
g
s
:
 
(
t
a
g
s
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
 
[
"
b
l
o
g
"
,
 
"
b
y
-
t
a
g
s
"
,
 
t
a
g
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
a
d
m
i
n
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>


 
 
 
 
 
 
[
"
b
l
o
g
"
,
 
"
a
d
m
i
n
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
A
p
t
i
t
u
d
e


 
 
a
p
t
i
t
u
d
e
:
 
{


 
 
 
 
c
a
t
e
g
o
r
i
e
s
:
 
(
)
 
=
>
 
[
"
a
p
t
i
t
u
d
e
"
,
 
"
c
a
t
e
g
o
r
i
e
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
t
o
p
i
c
:
 
(
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
)
 
=
>
 
[
"
a
p
t
i
t
u
d
e
"
,
 
"
t
o
p
i
c
"
,
 
s
l
u
g
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
c
o
m
p
a
n
i
e
s
:
 
(
)
 
=
>
 
[
"
a
p
t
i
t
u
d
e
"
,
 
"
c
o
m
p
a
n
i
e
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
c
o
m
p
a
n
y
:
 
(
n
a
m
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
 
[
"
a
p
t
i
t
u
d
e
"
,
 
"
c
o
m
p
a
n
y
"
,
 
n
a
m
e
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
p
r
o
g
r
e
s
s
:
 
(
)
 
=
>
 
[
"
a
p
t
i
t
u
d
e
"
,
 
"
p
r
o
g
r
e
s
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
w
e
a
k
A
r
e
a
s
:
 
(
)
 
=
>
 
[
"
a
p
t
i
t
u
d
e
"
,
 
"
w
e
a
k
-
a
r
e
a
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
S
k
i
l
l
 
T
e
s
t
s


 
 
s
k
i
l
l
T
e
s
t
s
:
 
{


 
 
 
 
l
i
s
t
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>


 
 
 
 
 
 
[
"
s
k
i
l
l
-
t
e
s
t
s
"
,
 
"
l
i
s
t
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
d
e
t
a
i
l
:
 
(
i
d
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
 
[
"
s
k
i
l
l
-
t
e
s
t
s
"
,
 
"
d
e
t
a
i
l
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
m
y
A
t
t
e
m
p
t
s
:
 
(
)
 
=
>
 
[
"
s
k
i
l
l
-
t
e
s
t
s
"
,
 
"
m
y
-
a
t
t
e
m
p
t
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
m
y
V
e
r
i
f
i
e
d
:
 
(
)
 
=
>
 
[
"
s
k
i
l
l
-
t
e
s
t
s
"
,
 
"
m
y
-
v
e
r
i
f
i
e
d
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
t
u
d
e
n
t
V
e
r
i
f
i
e
d
:
 
(
s
t
u
d
e
n
t
I
d
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


 
 
 
 
 
 
[
"
s
k
i
l
l
-
t
e
s
t
s
"
,
 
"
s
t
u
d
e
n
t
-
v
e
r
i
f
i
e
d
"
,
 
s
t
u
d
e
n
t
I
d
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
S
Q
L
 
P
r
a
c
t
i
c
e


 
 
s
q
l
:
 
{


 
 
 
 
p
r
o
g
r
e
s
s
:
 
(
)
 
=
>
 
[
"
s
q
l
"
,
 
"
p
r
o
g
r
e
s
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
I
n
t
e
r
n
s
h
i
p
s


 
 
i
n
t
e
r
n
s
h
i
p
s
:
 
{


 
 
 
 
l
i
s
t
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>


 
 
 
 
 
 
[
"
i
n
t
e
r
n
s
h
i
p
s
"
,
 
"
l
i
s
t
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
t
a
t
s
:
 
(
)
 
=
>
 
[
"
i
n
t
e
r
n
s
h
i
p
s
"
,
 
"
s
t
a
t
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
S
c
r
a
p
e
d
 
/
 
e
x
t
e
r
n
a
l
 
j
o
b
 
a
g
g
r
e
g
a
t
o
r


 
 
s
c
r
a
p
e
d
J
o
b
s
:
 
{


 
 
 
 
a
l
l
:
 
[
"
s
c
r
a
p
e
d
-
j
o
b
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
o
u
r
c
e
s
:
 
(
)
 
=
>
 
[
"
s
c
r
a
p
e
d
-
j
o
b
s
"
,
 
"
s
o
u
r
c
e
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
l
i
s
t
:
 
(
p
a
r
a
m
s
?
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
)
 
=
>


 
 
 
 
 
 
[
"
s
c
r
a
p
e
d
-
j
o
b
s
"
,
 
"
l
i
s
t
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
d
e
t
a
i
l
:
 
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
 
|
 
n
u
m
b
e
r
)
 
=
>
 
[
"
s
c
r
a
p
e
d
-
j
o
b
s
"
,
 
"
d
e
t
a
i
l
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,


 
 


 
 
e
x
t
e
r
n
a
l
J
o
b
s
:
 
{


 
 
 
 
d
e
t
a
i
l
:
 
(
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
)
 
=
>
 
[
"
e
x
t
e
r
n
a
l
-
j
o
b
"
,
 
s
l
u
g
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
i
m
i
l
a
r
:
 
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
 
|
 
n
u
m
b
e
r
)
 
=
>
 
[
"
e
x
t
e
r
n
a
l
-
j
o
b
-
s
i
m
i
l
a
r
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
t
a
t
u
s
:
 
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
 
|
 
n
u
m
b
e
r
)
 
=
>
 
[
"
e
x
t
e
r
n
a
l
-
j
o
b
-
s
t
a
t
u
s
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
P
r
o
f
e
s
s
o
r
s


 
 
p
r
o
f
e
s
s
o
r
s
:
 
{


 
 
 
 
l
i
s
t
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>


 
 
 
 
 
 
[
"
p
r
o
f
e
s
s
o
r
s
"
,
 
"
l
i
s
t
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
t
a
t
s
:
 
(
)
 
=
>
 
[
"
p
r
o
f
e
s
s
o
r
s
"
,
 
"
s
t
a
t
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
B
a
d
g
e
s


 
 
b
a
d
g
e
s
:
 
{


 
 
 
 
a
l
l
:
 
(
)
 
=
>
 
[
"
b
a
d
g
e
s
"
,
 
"
a
l
l
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
m
y
:
 
(
)
 
=
>
 
[
"
b
a
d
g
e
s
"
,
 
"
m
y
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
t
u
d
e
n
t
:
 
(
i
d
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
 
[
"
b
a
d
g
e
s
"
,
 
"
s
t
u
d
e
n
t
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
a
d
m
i
n
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>
 
[
"
b
a
d
g
e
s
"
,
 
"
a
d
m
i
n
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
S
a
v
e
d
 
C
a
n
d
i
d
a
t
e
s


 
 
s
a
v
e
d
C
a
n
d
i
d
a
t
e
s
:
 
{


 
 
 
 
l
i
s
t
:
 
(
)
 
=
>
 
[
"
s
a
v
e
d
-
c
a
n
d
i
d
a
t
e
s
"
,
 
"
l
i
s
t
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
i
d
s
:
 
(
)
 
=
>
 
[
"
s
a
v
e
d
-
c
a
n
d
i
d
a
t
e
s
"
,
 
"
i
d
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
J
o
b
 
F
e
e
d
 
(
I
n
t
e
r
n
H
a
c
k
 
A
I
)


 
 
j
o
b
F
e
e
d
:
 
{


 
 
 
 
f
e
e
d
:
 
(
p
a
g
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
 
[
"
j
o
b
-
f
e
e
d
"
,
 
"
f
e
e
d
"
,
 
p
a
g
e
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
p
r
e
f
e
r
e
n
c
e
s
:
 
(
)
 
=
>
 
[
"
j
o
b
-
f
e
e
d
"
,
 
"
p
r
e
f
e
r
e
n
c
e
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
a
v
e
d
:
 
(
)
 
=
>
 
[
"
j
o
b
-
f
e
e
d
"
,
 
"
s
a
v
e
d
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
t
a
t
s
:
 
(
)
 
=
>
 
[
"
j
o
b
-
f
e
e
d
"
,
 
"
s
t
a
t
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,


 
 
j
o
b
A
g
e
n
t
:
 
{


 
 
 
 
c
o
n
v
e
r
s
a
t
i
o
n
:
 
(
)
 
=
>
 
[
"
j
o
b
-
a
g
e
n
t
"
,
 
"
c
o
n
v
e
r
s
a
t
i
o
n
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
I
n
t
e
r
v
i
e
w
 
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
s


 
 
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
:
 
{


 
 
 
 
a
l
l
:
 
[
"
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
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
l
i
s
t
:
 
(
p
a
r
a
m
s
?
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
 
b
o
o
l
e
a
n
>
)
 
=
>


 
 
 
 
 
 
[
"
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
"
,
 
"
l
i
s
t
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
d
e
t
a
i
l
:
 
(
i
d
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
 
[
"
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
"
,
 
"
d
e
t
a
i
l
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
c
o
m
p
a
n
i
e
s
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>


 
 
 
 
 
 
[
"
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
"
,
 
"
c
o
m
p
a
n
i
e
s
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
c
o
m
p
a
n
y
S
u
m
m
a
r
y
:
 
(
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
)
 
=
>
 
[
"
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
"
,
 
"
c
o
m
p
a
n
y
-
s
u
m
m
a
r
y
"
,
 
s
l
u
g
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
t
o
p
Q
u
e
s
t
i
o
n
s
:
 
(
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
)
 
=
>
 
[
"
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
"
,
 
"
t
o
p
-
q
u
e
s
t
i
o
n
s
"
,
 
s
l
u
g
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
F
u
n
d
i
n
g
 
S
i
g
n
a
l
s


 
 
s
i
g
n
a
l
s
:
 
{


 
 
 
 
a
l
l
:
 
[
"
s
i
g
n
a
l
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
l
i
s
t
:
 
(
p
a
r
a
m
s
?
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
 
b
o
o
l
e
a
n
 
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
)
 
=
>


 
 
 
 
 
 
[
"
s
i
g
n
a
l
s
"
,
 
"
l
i
s
t
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
d
e
t
a
i
l
:
 
(
i
d
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
 
[
"
s
i
g
n
a
l
s
"
,
 
"
d
e
t
a
i
l
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
o
u
r
c
e
s
:
 
(
)
 
=
>
 
[
"
s
i
g
n
a
l
s
"
,
 
"
s
o
u
r
c
e
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
t
a
t
s
:
 
(
)
 
=
>
 
[
"
s
i
g
n
a
l
s
"
,
 
"
s
t
a
t
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
D
S
A
 
P
r
a
c
t
i
c
e


 
 
d
s
a
:
 
{


 
 
 
 
t
o
p
i
c
s
:
 
(
f
i
l
t
e
r
?
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
 
[
"
d
s
a
"
,
 
"
t
o
p
i
c
s
"
,
 
f
i
l
t
e
r
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
t
o
p
i
c
:
 
(
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
,
 
p
a
g
e
?
:
 
n
u
m
b
e
r
,
 
f
i
l
t
e
r
s
?
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
)
 
=
>
 
[
"
d
s
a
"
,
 
"
t
o
p
i
c
"
,
 
s
l
u
g
,
 
p
a
g
e
,
 
f
i
l
t
e
r
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
p
r
o
b
l
e
m
:
 
(
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
)
 
=
>
 
[
"
d
s
a
"
,
 
"
p
r
o
b
l
e
m
"
,
 
s
l
u
g
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
p
r
o
g
r
e
s
s
:
 
(
)
 
=
>
 
[
"
d
s
a
"
,
 
"
p
r
o
g
r
e
s
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
b
o
o
k
m
a
r
k
s
:
 
(
)
 
=
>
 
[
"
d
s
a
"
,
 
"
b
o
o
k
m
a
r
k
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
c
o
m
p
a
n
i
e
s
:
 
(
)
 
=
>
 
[
"
d
s
a
"
,
 
"
c
o
m
p
a
n
i
e
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
c
o
m
p
a
n
y
:
 
(
n
a
m
e
:
 
s
t
r
i
n
g
,
 
p
a
g
e
?
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
 
[
"
d
s
a
"
,
 
"
c
o
m
p
a
n
y
"
,
 
n
a
m
e
,
 
p
a
g
e
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
c
o
m
p
a
n
y
T
r
a
c
k
S
t
a
t
s
:
 
(
n
a
m
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
 
[
"
d
s
a
"
,
 
"
c
o
m
p
a
n
y
"
,
 
n
a
m
e
,
 
"
t
r
a
c
k
-
s
t
a
t
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
p
a
t
t
e
r
n
s
:
 
(
)
 
=
>
 
[
"
d
s
a
"
,
 
"
p
a
t
t
e
r
n
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
p
a
t
t
e
r
n
:
 
(
n
a
m
e
:
 
s
t
r
i
n
g
,
 
p
a
g
e
?
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
 
[
"
d
s
a
"
,
 
"
p
a
t
t
e
r
n
"
,
 
n
a
m
e
,
 
p
a
g
e
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
h
e
e
t
s
:
 
(
)
 
=
>
 
[
"
d
s
a
"
,
 
"
s
h
e
e
t
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
l
i
s
t
s
:
 
(
)
 
=
>
 
[
"
d
s
a
"
,
 
"
l
i
s
t
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
l
i
s
t
:
 
(
n
a
m
e
:
 
s
t
r
i
n
g
,
 
p
a
g
e
?
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
 
[
"
d
s
a
"
,
 
"
l
i
s
t
"
,
 
n
a
m
e
,
 
p
a
g
e
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
u
b
m
i
s
s
i
o
n
s
:
 
(
p
r
o
b
l
e
m
I
d
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
 
[
"
d
s
a
"
,
 
"
s
u
b
m
i
s
s
i
o
n
s
"
,
 
p
r
o
b
l
e
m
I
d
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
i
m
p
o
r
t
S
t
a
t
u
s
:
 
(
)
 
=
>
 
[
"
d
s
a
"
,
 
"
i
m
p
o
r
t
-
s
t
a
t
u
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
t
r
e
a
k
:
 
(
)
 
=
>
 
[
"
d
s
a
"
,
 
"
s
t
r
e
a
k
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
a
c
t
i
v
i
t
y
:
 
(
y
e
a
r
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
 
[
"
d
s
a
"
,
 
"
a
c
t
i
v
i
t
y
"
,
 
y
e
a
r
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
s
i
m
i
l
a
r
:
 
(
i
d
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
 
[
"
d
s
a
"
,
 
"
s
i
m
i
l
a
r
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
a
p
p
r
o
a
c
h
e
s
:
 
(
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
)
 
=
>
 
[
"
d
s
a
"
,
 
"
a
p
p
r
o
a
c
h
e
s
"
,
 
s
l
u
g
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,




 
 
/
/
 
R
o
a
d
m
a
p
s


 
 
r
o
a
d
m
a
p
s
:
 
{


 
 
 
 
a
l
l
:
 
[
"
r
o
a
d
m
a
p
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
l
i
s
t
:
 
(
p
a
r
a
m
s
?
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
>
)
 
=
>


 
 
 
 
 
 
[
"
r
o
a
d
m
a
p
s
"
,
 
"
l
i
s
t
"
,
 
p
a
r
a
m
s
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
d
e
t
a
i
l
:
 
(
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
)
 
=
>
 
[
"
r
o
a
d
m
a
p
s
"
,
 
"
d
e
t
a
i
l
"
,
 
s
l
u
g
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
e
n
r
o
l
l
m
e
n
t
s
:
 
(
)
 
=
>
 
[
"
r
o
a
d
m
a
p
s
"
,
 
"
e
n
r
o
l
l
m
e
n
t
s
"
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
e
n
r
o
l
l
m
e
n
t
D
e
t
a
i
l
:
 
(
i
d
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
 
[
"
r
o
a
d
m
a
p
s
"
,
 
"
e
n
r
o
l
l
m
e
n
t
-
d
e
t
a
i
l
"
,
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
e
n
r
o
l
l
m
e
n
t
A
n
a
l
y
t
i
c
s
:
 
(
i
d
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
 
[
"
r
o
a
d
m
a
p
s
"
,
 
"
e
n
r
o
l
l
m
e
n
t
-
a
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
 
i
d
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
t
o
p
i
c
:
 
(
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
,
 
t
o
p
i
c
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
 
=
>
 
[
"
r
o
a
d
m
a
p
s
"
,
 
"
t
o
p
i
c
"
,
 
s
l
u
g
,
 
t
o
p
i
c
S
l
u
g
]
 
a
s
 
c
o
n
s
t
,


 
 
 
 
c
o
m
m
u
n
i
t
y
:
 
(
)
 
=
>
 
[
"
r
o
a
d
m
a
p
s
"
,
 
"
c
o
m
m
u
n
i
t
y
"
]
 
a
s
 
c
o
n
s
t
,


 
 
}
,


}
;


